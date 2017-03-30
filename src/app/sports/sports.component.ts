import { Component, OnInit } from '@angular/core';

import { Sport } from '../sport';

import { SportService } from '../sport.service';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [SportService]
})
export class SportsComponent implements OnInit {
  errorMessage: string;
  sports: Sport[];

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.getSports();
  }

  getSports(): void {
    this.sportService.getSports().subscribe(
      sports => this.sports = sports,
      error => this.errorMessage = <any>error);
  }
}
