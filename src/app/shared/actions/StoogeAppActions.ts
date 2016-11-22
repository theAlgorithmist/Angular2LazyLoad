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

export enum BasicActions
{
  NONE,               // no action
  ALL,                // entire application updated (to be implemented as an exercise)
  GET_HISTORY,        // get stooge history, only history updated
  GET_BIOS,           // get stooge bios, only bios updated
  GET_EPISODES,       // get episode data, only episodes updated
  GET_NAMES           // get stooge names and id and bios
}