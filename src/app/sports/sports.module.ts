import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';

import { SportsComponent } from './sports.component';
import { SportsMedalsComponent } from '../sports-medals/sports-medals.component';

@NgModule({
  imports: [
    CommonModule,
    SportsRoutingModule
  ],
  declarations: [
    SportsComponent,
    SportsMedalsComponent
  ]
})
export class SportsModule { }
