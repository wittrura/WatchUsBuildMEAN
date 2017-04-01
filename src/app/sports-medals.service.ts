import { Injectable } from '@angular/core';

import { Sport } from './sport';

@Injectable()
export class SportsMedalsService {

  constructor() { }

  getMedals(): Sport {
    return {
      "name": "Cycling",
      "goldMedals": [{
        "division": "Men's Sprint",
        "country": "UK",
        "year": 2012
      }, {
        "division": "Women's Sprint",
        "country": "Australia",
        "year": 2012
      }]
    };
  }
}
