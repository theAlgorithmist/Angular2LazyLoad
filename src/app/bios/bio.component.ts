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

// platform imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute       } from '@angular/router';

// Global store
import { StoogeModel } from '../shared/model/StoogeModel';

// rxjs imports
import { Subject      } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

// actions
import { BasicActions } from '../shared/actions/StoogeAppActions';

// The boys
import { TheStooges } from '../shared/stooges/stooges';

@Component({
  templateUrl: 'bio.component.html',

  styleUrls: ['bio.component.css']
})

/**
 * Display an individual bios component for The Three Stooges micro-app, i.e. <app_url>/bios/
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class BioComponent implements OnInit, OnDestroy
{
  private _actor: String = "Actor";                               // Actor's name
  private _bio: String   = "Bio information to be inserted here"; // biographical information on a single actor
  private _imgUrl:String = "none";                                // url for the image associated with a single actor
  private _bioData: Object;                                       // biographical data on all Stooges, indexed by Stooge id

  // subject used to subscribe to model updates
  private _subject: Subject<any>;                                 

  // subscribe to arbitrary router param values
  private _sub: any;

/**
  * Construct a Stooge bio component
  *
  * @param _model: StoogeModel - Global model for the Three Stooges application
  * @param _route: ActivatedRoute - Reference to the ActivatedRoute that was directed to this component
  *
  * @return Nothing
  */
  constructor( private _model:StoogeModel, private _route: ActivatedRoute )
  {
    // subscribe to model updates
    this._subject                  = new Subject<any>();
    let subscription: Subscription = this._subject.subscribe( (data:Object) => this.__onModelUpdate(data) ); 

    this._model.subscribe(this._subject);
  }

  public ngOnInit(): void
  {
    // request the bio data - experiment with placing this elsewhere in the component lifecycle
    this._model.dispatchAction(BasicActions.GET_BIOS);
  }

  // update the component based on new model data.  See documentation for stooge history component for more info.
  private __onModelUpdate(data:Object): void
  {
    // we can get away with direct assignment since the data returned from the global store is always a copy
    if (data['action'] == BasicActions.GET_BIOS)
    {
      if (data.hasOwnProperty('bios'))
      {
        this._bioData = data['bios'];

        // subscribe to activated route params
        this._sub = this._route.params.subscribe( params => {
          let id: string = params['id'];
          
          if (this._bioData.hasOwnProperty(id))
          {
            this._actor  = TheStooges.toFullName(id);
            this._bio    = this._bioData[id];
            this._imgUrl = "assets/" + id + ".jpg";
          }
          else
          {
            this._actor  = "Actor not found";
            this._bio    = "Bio not available";
            this._imgUrl = "none";
          }
        });
      }
    }
  }

  public ngOnDestroy()
  {
    this._sub.unsubscribe();

    this._model.unsubscribe(this._subject);
  }
}
