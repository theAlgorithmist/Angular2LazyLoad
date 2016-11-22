/** 
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * StoogeModel - This is the global store for the Three Stooges application. 
 *
 * The model is Redux-style in the sense that it maintains immutability, accepts action dispatch with type and payload,
 * internally reduces the model as needed, and then sends copies of relevant slices of the model to subscribers.  In terms
 * of the general Flux architecture, there is no formal dispatcher.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

 // platform imports
 import { Injectable } from '@angular/core';

 // interfaces
 import { IReduxModel } from '../interfaces/IReduxModel';

 // actions
 import { BasicActions } from '../actions/StoogeAppActions';

 // services
 import { SimpleService } from '../services/simple-service';

 // rxjs
 import { Subject    } from 'rxjs/Subject';
 import { Observable } from 'rxjs/Observable';

 // The Stooges
 import { TheStooges } from '../stooges/stooges';

 @Injectable()
 export class StoogeModel implements IReduxModel
 {
   // singleton instance
   private static _instance: StoogeModel;

   // reference to actual store - this remains private to support compile-time immutability
   private _store: Object = new Object();

   // subscribers to model updates
   private _subscribers:Array<Subject<any>>;

  /**
   * Construct a new Three Stooges model
   *
   * @return StoogeModel - A (singleton) Redux-style store
   */
   constructor(private _service: SimpleService) 
   {
     if (StoogeModel._instance instanceof StoogeModel) 
       return StoogeModel._instance;
     
     console.log( "***** CONSTRUCTING MODEL" );            // like The Highlander, there can be only one ...

     // define the structure of the application store
     this._store['history' ] = "";                         // a brief history of The Three Stooges
     this._store['source'  ] = "";                         // reference source for the history
     this._store['bios'    ] = {};                         // brief biographical data on the stooges
     this._store['episodes'] = [];                         // Array of Objects, each of which contains data on a stooges episode
     this._store['names'   ] = [];                         // stooge (string) id and full name
     this._store['action'  ] = BasicActions.NONE;          // most recent action

     // list of subscribers to updates to the store
     this._subscribers = new Array<Subject<any>>();

     StoogeModel._instance = this;
   }

  /**
   * Subscribe a new Subject to the model
   *
   * @param subject: Subject<any> Subject<any> with at least an onNext handler
   *
   * @return Nothing - The Subject's onNext handler will be invoked on model updates.  This will pass an Object containing a copy of a slice of the global store, which
   * will always include the 'action' property.
   */
   public subscribe( subject: Subject<any> ): void
   {
     // for a full-on, production app, would want to make this test tighter
     if (subject)
       this._subscribers.push(subject);
   }

  /**
   * Unsubscribe an existing Subject from the model
   *
   * @param subject: Subject<any> Subject<any> with at least an onNext handler
   *
   * @return Nothing - If found, the Subject is removed from the subscriber list (typically executed when a component is destructed)
   */
   public unsubscribe( subject: Subject<any> ): void
   {
     // for a full-on, production app, would want to make this test tighter
     if (subject)
     {
       let len: number = this._subscribers.length;
       let i: number;

       for (i=0; i<len; ++i)
       {
         if (this._subscribers[i] === subject)
         {
           this._subscribers.splice(i,1);
           break;
         }
       }
     }
   }

  /**
   * Dispatch an Action to the model, which causes the model to be changed - application of a reducer - and then a slice of the new model
   * is sent to all subscribers.  This includes the action that caused the reduction.  A copy of model data is always sent to perserve
   * immutability.  This takes the place of a dispatcher in the Flux pattern.
   *
   * @param action: Number Action type
   *
   * @param payload: Object (optional) Payload for the action, which may be used by a reducer
   *
   * @return Nothing - All subscribers are notified after the model is updated
   */
   public dispatchAction(action: number, payload: Object=null): void
   {
     let validAction: Boolean = false;
     let data:Object;

     // note that as this application increases in complexity, it favors moving operations involving one-time fetch of data into a specific reducer just
     // for that purpose; the current implementation is better suited for ease of deconstruction

     // data need only be fetched once
     switch (action)
     {
       case BasicActions.GET_HISTORY:
         if (this._store['history'] == "")
         {
           this._service.getData("services/history.php")
                        .subscribe( data  => this.__onHistoryData(data),
                                    error => console.log(<any>error) );
  
           validAction = false;  // wait for return and full processing of data from the service
         }
         else
         {
           this._store['action'] = BasicActions.GET_HISTORY;
           validAction           = true;
         }
       break;

       case BasicActions.GET_BIOS:
         // check one bio for previously loaded data - or you could go through the whole empty object test
         if (!this._store['bios'].hasOwnProperty(TheStooges.MOE))
         {
           this._service.getData("services/bios.php")
                        .subscribe( data  => this.__onBioData(data),
                                    error => console.log(<any>error) );

           validAction = false;  // wait for return and full processing of data from the service
         }
         else
         {
           this._store['action'] = BasicActions.GET_BIOS;
           validAction           = true;
         }
       break;

       case BasicActions.GET_EPISODES:
         if (this._store['episodes'].length == 0) 
         {
           this._service.getData("services/episodes.php")
                        .subscribe( data  => this.__onEpisodeData(data),
                                    error => console.log(<any>error) );

           validAction = false;  // wait for return and full processing of data from the service
         }
         else
         {
           this._store['action'] = BasicActions.GET_EPISODES;
           validAction           = true;
         }
       break;

       case BasicActions.GET_NAMES:
         this._store['names' ] = TheStooges.getStooges().slice();
         this._store['action'] = BasicActions.GET_NAMES;

         validAction = true;
       break;

       case BasicActions.ALL:
         // to be implemented as an exercise - required refactoring this section of code
       break;
     }

     if (validAction)
       this.__updateSubscribers();
   }

   // NOTE:  Making these handlers a bit more DRY is left as an exercise

   private __onEpisodeData(data: String | Object): void
   {
     let episodeData: Object = typeof data === 'string' ? JSON.parse(data) : data;

     this._store['episodes'] = episodeData['episodes'];
     this._store['action'  ] = BasicActions.GET_EPISODES;

     this.__updateSubscribers();
   }

   private __onHistoryData(data: String | Object): void
   {     
     let historyData: Object = typeof data === 'string' ? JSON.parse(data) : data;

     this._store['history' ] = historyData['history'];
     this._store['source'  ] = historyData['source' ];

     this._store['action'  ] = BasicActions.GET_HISTORY;

     this.__updateSubscribers();
   }

   private __onBioData(data: String | Object): void
   {
     let bioData: Object = typeof data === 'string' ? JSON.parse(data) : data;

     this._store['bios'  ] = JSON.parse( JSON.stringify(bioData) );
     this._store['action'] = BasicActions.GET_BIOS;

     this.__updateSubscribers();
   }

   private __updateSubscribers(): void
   {
     // send copy of current store to subscribers, which includes most recent action - this keeps global store immutable
     let store: Object = JSON.parse( JSON.stringify(this._store) );

     this._subscribers.map( (s:Subject<any>) => s.next(store) );
   }
 }