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
import { Component } from '@angular/core';

// base Flux component
import { FluxComponent } from './flux.component';

// Global store, and routes
import { StoogeModel } from './shared/model/StoogeModel';
import { RouteEnum   } from './shared/model/RoutesEnum';

// actions
import { BasicActions } from './shared/actions/StoogeAppActions';

// rxjs imports
import { Subject      } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',

  templateUrl: 'app.component.html',

  styleUrls: ['app.component.css']
})

/**
 * Root component for The Three Stooges demo 
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export class AppComponent extends FluxComponent
 {
   private _loading: boolean = false; // true if actively loading a route for the first time, meaning we must deactivate nav links
   private _loaded: Object   = {};    // keep track if routes have already been loaded, i.e. whether or not we need to indicate loading in progress

 /**
   * Construct the main app component
   *
   * @return Nothing
   */
   constructor(private _m: StoogeModel)
   {
     super(_m);

     // indicate whether or not the route 'loading' indicator needs to be shown (an indication of waiting for data)
     this._loaded[RouteEnum.SCRIPT  ] = true;
     this._loaded[RouteEnum.HISTORY ] = false;
     this._loaded[RouteEnum.BIOS    ] = false;
     this._loaded[RouteEnum.EPISODES] = false;
   }

   private __onNavClicked(routeID: string): boolean
   {
     if (!this._loaded[routeID])
       this._loading = true;

     return true;
   }

   // update the component based on new model data
   protected __onModelUpdate(data:Object): void
   {
     if (this._loading)
     {
       switch (data['action'])
       {
         case BasicActions.GET_HISTORY:
           this._loaded[RouteEnum.HISTORY ] = true;
         break;

         case BasicActions.GET_BIOS:
           this._loaded[RouteEnum.BIOS] = true;
         break;

         case BasicActions.GET_EPISODES:
            this._loaded[RouteEnum.EPISODES] = true;
         break;

         case BasicActions.GET_NAMES:
         break;
       }

       this._loading = false;
     }
   }
 }
