import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//this needs import to be able to use them
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './modules/user/user.module';
import { FormsModule } from '@angular/forms';
import { HotelPricesModule } from './modules/hotel-prices/hotel-prices.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/find/find.component';
import { SigninComponent } from './components/signin/signin.component';

//add the HttpClientModule to imports to use it
@NgModule({
  declarations: [AppComponent, AboutComponent, FeedbackComponent, HomeComponent, FindComponent, SigninComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, UserModule, HotelPricesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
