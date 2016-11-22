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
 * Static data source for stooge names and room for future data that depends on the base identifiers for each actor
 */
export class TheStooges
{
  public static MOE: string        = "M";
  public static LARRY: string      = "L";
  public static CURLY: string      = "C";
  public static SHEMP: string      = "S";
  public static JOE_DERITA: string = "JD";
  public static JOE_BESSER: string = "JB";

  constructor()
  {
    // empty
  }

  public static getStooges(): Array<Object>
  {
    return [
            { id:TheStooges.MOE       , name:TheStooges.toFullName(TheStooges.MOE)        }, 
            { id:TheStooges.LARRY     , name:TheStooges.toFullName(TheStooges.LARRY)      },
            { id:TheStooges.CURLY     , name:TheStooges.toFullName(TheStooges.CURLY)      },
            { id:TheStooges.SHEMP     , name:TheStooges.toFullName(TheStooges.SHEMP)      },
            { id:TheStooges.JOE_DERITA, name:TheStooges.toFullName(TheStooges.JOE_DERITA) },
            { id:TheStooges.JOE_BESSER, name:TheStooges.toFullName(TheStooges.JOE_BESSER) }
           ];
  }

  public static toFullName(id: string): string
  {
    switch (id)
    {
      case this.MOE:
        return "Moe Howard";

      case this.LARRY:
        return "Larry Fine";

      case this.CURLY:
        return "Jerome Horiwitz (Curly)";

      case this.SHEMP:
        return "Shemp Howard";

      case this.JOE_DERITA:
        return "Joe Derita";

      case this.JOE_BESSER:
        return "Joe Besser";

      default:
        return "";
    }
  }
}