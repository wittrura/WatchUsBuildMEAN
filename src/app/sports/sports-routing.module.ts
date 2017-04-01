import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SportsComponent } from './sports.component';
import { SportsMedalsComponent } from '../sports-medals/sports-medals.component';

const sportsRoutes: Routes = [
  {
    path: 'sports',
    component: SportsComponent,
    children: [
      {
        path: ':name',
        component: SportsMedalsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sportsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SportsRoutingModule {}
