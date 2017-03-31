import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/sports',
          pathMatch: 'full'
        },
        {
          path: 'sports',
          component: SportsComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
