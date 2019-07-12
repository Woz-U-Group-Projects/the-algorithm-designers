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

//add the HttpClientModule to imports to use it
@NgModule({
  declarations: [AppComponent, AboutComponent, FeedbackComponent, HomeComponent, FindComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
