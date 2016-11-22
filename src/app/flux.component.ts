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
import { OnDestroy } from '@angular/core';

// Global store
import { StoogeModel } from './shared/model/StoogeModel';

// rxjs imports
import { Subject      } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

/**
 * A generic Flux-style component.  In terms of interaction with the oustide world, this component may only dispatch actions and subscribe to updates from the store.  
 * Any component may be inserted anywhere in the heirarchy and the application flow remains deterministic.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export class FluxComponent implements OnDestroy
{
  protected _subject: Subject<any>;       // Subject to subscribe to model updates

 /**
  * Construct a new Flux-style component
  *
  * @param _m: StoogeModel Reference to the global (Redux-style) store for the Three Stooges micro-app
  *
  * @return Nothing
  */
  constructor(protected _model: StoogeModel)
  {
    // subscribe this component to model updates
    this._subject                  = new Subject<any>();
    let subscription: Subscription = this._subject.subscribe( (data:Object) => this.__onModelUpdate(data) ); 

    this._model.subscribe(this._subject);
  }

 /**
  * Unsubscribe from model updates whenever the component is destroyed
  *
  * @return Nothing This is very important for routable components that will be instantiated and then destroyed when navigating to and from a specific route
  */
  public ngOnDestroy(): void
  {
    this._model.unsubscribe(this._subject);
  }

  // update the component based on new model data. 
  protected __onModelUpdate(data:Object): void
  {
    // override in sub-class
  }
}
