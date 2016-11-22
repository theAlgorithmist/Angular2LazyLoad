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
 * This is the root application module for the lazy-loaded Three Stooges micro-application
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

// platform imports
import { NgModule             } from '@angular/core';
import { BrowserModule        } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule           } from '@angular/http';

// main application component
import { AppComponent } from './app.component';

// components and modules for eagerly-loaded routes
import { ScriptModule } from './script/script.module';
import { NotFoundComponent } from './notfound/notfound.component';

// the shared model module
import { SharedModelModule } from './sharedModel.module';

const lazyloadComponents = [ AppComponent, NotFoundComponent ];

const lazyloadDirectives = [ ];

const lazyloadPipes = [ ];

const appRoutes: Routes = [
  { path: ''        , redirectTo: 'script', pathMatch: 'full'                     },
  { path: 'history' , loadChildren: 'app/history/history.module#HistoryModule'    },
  { path: 'bios'    , loadChildren: 'app/bios/bios.module#BioModule'              },
  { path: 'bios/:id', loadChildren: 'app/bios/stoogebio.module#StoogeBiosModule'  },
  { path: 'episodes', loadChildren: 'app/episodes/episodes.module#EpisodesModule' },
  { path: '404'     , component: NotFoundComponent                                },
  { path: '**'      , redirectTo: '404'                                           }
];

@NgModule({
  declarations: [
    ...lazyloadComponents,
    ...lazyloadDirectives,
    ...lazyloadPipes
  ],

  imports: [
    BrowserModule,
    ScriptModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModelModule.forRoot()
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }