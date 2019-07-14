import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//this needs import to be able to use them
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/find/find.component';
import { SigninComponent } from './components/signin/signin.component';
import { DenvercoComponent } from './components/denverco/denverco.component';
import { LacaliComponent } from './components/lacali/lacali.component';
import { HonoluluhawaiiComponent } from './components/honoluluhawaii/honoluluhawaii.component';
import { NewyorkComponent } from './components/newyork/newyork.component';
import { SbmiamiComponent } from './components/sbmiami/sbmiami.component';
import { FormsModule } from '@angular/forms';

//add the HttpClientModule to imports to use it
@NgModule({
  declarations: [AppComponent, AboutComponent, FeedbackComponent, HomeComponent, FindComponent, SigninComponent, DenvercoComponent, LacaliComponent, HonoluluhawaiiComponent, NewyorkComponent, SbmiamiComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
