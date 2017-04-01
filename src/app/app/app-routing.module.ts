import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { SportsComponent } from '../sports/sports.component';
// import { SportsMedalsComponent } from '../sports-medals/sports-medals.component';

const routes: Routes = [
      {
        path: '',
        redirectTo: '/sports',
        pathMatch: 'full'
      }
      // {
      //   path: 'sports',
      //   component: SportsComponent
      // }
      // {
      //   path: 'sports/:sportName',
      //   component: SportsMedalsComponent
      // }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
