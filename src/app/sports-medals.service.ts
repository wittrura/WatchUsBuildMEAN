import { Injectable } from '@angular/core';

export class Medal {
  name: string;
  goldMedals: [{
    division: string,
    country: string,
    year: number
  }]
};

@Injectable()
export class SportsMedalsService {

  constructor() { }

  getMedals(): Medal {
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
