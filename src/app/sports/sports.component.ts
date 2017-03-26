import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  private sports = ["Weightlifting", "Cycling"];

  constructor() { }

  ngOnInit() {
  }

}
