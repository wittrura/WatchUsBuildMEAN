import { Component, OnInit } from '@angular/core';

import { Sport } from '../sport';

import { SportService } from '../sport.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [SportService]
})
export class SportsComponent implements OnInit {
  errorMessage: string;
  // selectedSport: Sport;
  selectedSportName: string;
  sports: Sport[];

  constructor(
    private sportService: SportService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSports();
  }

  onSelect(sport: Sport): void {
    this.selectedSportName = sport.name;

    // navigate with relative link
    this.router.navigate([sport.name], { relativeTo: this.route });
  }

  getSports(): void {
    this.sportService.getSports().subscribe(
      sports => this.sports = sports,
      error => this.errorMessage = <any>error);
  }
}
