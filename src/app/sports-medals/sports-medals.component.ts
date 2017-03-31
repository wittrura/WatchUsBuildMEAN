import { Component, OnInit, Input } from '@angular/core';

import { Sport } from '../sport';

@Component({
  selector: 'sports-medals',
  templateUrl: './sports-medals.component.html',
  styleUrls: ['./sports-medals.component.css']
})
export class SportsMedalsComponent implements OnInit {
  @Input() sport: Sport;

  constructor() { }

  ngOnInit() {
  }

}
