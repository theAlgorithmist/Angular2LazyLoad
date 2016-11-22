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
 * Stooge bios module
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

// platform imports
import { NgModule             } from '@angular/core';
import { CommonModule         } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

// component
import { BioComponent } from './bio.component';

// the shared model module
import { SharedModelModule } from '../sharedModel.module';

const localRoutes: Routes = [
    { path: '', component: BioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(localRoutes),
    SharedModelModule
  ],

  declarations: [
    BioComponent
  ]
})

export class StoogeBiosModule { }