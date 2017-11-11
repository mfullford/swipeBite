import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { LandingModule } from './landing/landing.module';
import { HttpModule } from '@angular/http';
import { LandingModule } from './landing/landing.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingRoutingModule } from './landing/landing-routing.module';

import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { LoginButtonComponent } from './landing-page/login-button/login-button.component';

import { Injectable } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    // LandingPageComponent,
    // LoginButtonComponent,
    // LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingRoutingModule,
    HttpModule,
    LandingModule
    // LandingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
