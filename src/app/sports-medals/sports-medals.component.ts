import { Component, OnInit, Input } from '@angular/core';

import { Sport } from '../sport';

import { SportService } from '../sport.service';

@Component({
  selector: 'sports-medals',
  templateUrl: './sports-medals.component.html',
  styleUrls: ['./sports-medals.component.css'],
  providers: [SportService]
})
export class SportsMedalsComponent implements OnInit {
  @Input() sport: Sport;
  // sport: Sport;

  constructor(private sportService: SportService) { }

  ngOnInit(): void {
    this.getMedals();
  }

  getMedals(): void {
    this.sport = this.sportService.getMedals();
  }



}
