import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//this needs import to be able to use them
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './modules/user/user.module';
import { FormsModule } from '@angular/forms';
import { HotelPricesModule } from './modules/hotel-prices/hotel-prices.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//add the HttpClientModule to imports to use it
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, UserModule, HotelPricesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
