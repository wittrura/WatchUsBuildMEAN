import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Sport } from '../sport';

import { SportService } from '../sport.service';

@Component({
  selector: 'sports-medals',
  templateUrl: './sports-medals.component.html',
  styleUrls: ['./sports-medals.component.css'],
  providers: [SportService]
})
export class SportsMedalsComponent implements OnInit {
  // @Input() sport: Sport;
  sport: Sport;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportService: SportService
  ) {}

  ngOnInit(): void {
    // this.route.params
        // .switchMap((params: Params) => console.log(params['name']));
        // .switchMap((params: Params) => this.getMedals(params['name']));
        // .switchMap((params: Params) => this.sportName = (params['name']));
    // console.log(this.sportName);
    this.route.params
      .switchMap((params: Params) => this.sportService.getMedal(params['name']))
      .subscribe((sport: Sport) => this.sport = sport);

    // console.log(this.route.params['name']);
    // console.log(this.route.params);
    // this.getMedals();
  }

  // getMedals(): void {
  //   this.sportService.getMedals().subscribe(
  //     sport => this.sport = sport,
  //     error => this.errorMessage = <any>error);
  //   // this.sport = this.sportService.getMedals();
  // }

}
