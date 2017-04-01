import { Component, OnInit, Input } from '@angular/core';

import { Sport } from '../sport';

import { SportsMedalsService } from '../sports-medals.service';

@Component({
  selector: 'sports-medals',
  templateUrl: './sports-medals.component.html',
  styleUrls: ['./sports-medals.component.css'],
  providers: [SportsMedalsService]
})
export class SportsMedalsComponent implements OnInit {
  @Input() sport: Sport;
  // sport: Sport;

  constructor(private sportsMedalsService: SportsMedalsService) { }

  ngOnInit(): void {
    this.getMedals();
  }

  getMedals(): void {
    this.sport = this.sportsMedalsService.getMedals();
  }



}
