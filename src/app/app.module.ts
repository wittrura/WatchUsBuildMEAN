import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { SportsComponent } from './sports/sports.component';
// import { SportsMedalsComponent } from './sports-medals/sports-medals.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';

import { SportsModule } from './sports/sports.module';

@NgModule({
  declarations: [
    AppComponent
    // SportsComponent,
    // SportsMedalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SportsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
