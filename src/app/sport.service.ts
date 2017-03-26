import { Injectable } from '@angular/core';

import { Sport } from './sport';
import { SPORTS } from './mock-sports';

@Injectable()
export class SportService {

  constructor() { }

  getSports(): Promise<Sport[]> {
    return Promise.resolve(SPORTS);
  }

}
