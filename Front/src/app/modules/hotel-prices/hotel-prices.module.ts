import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { DenvercoComponent } from './components/denverco/denverco.component';
import { NewyorkComponent } from './components/newyork/newyork.component';
import { HonoluluhawaiiComponent } from './components/honoluluhawaii/honoluluhawaii.component';
import { LacaliComponent } from './components/lacali/lacali.component';
import { SbmiamiComponent } from './components/sbmiami/sbmiami.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DenvercoComponent, NewyorkComponent, HonoluluhawaiiComponent, LacaliComponent, SbmiamiComponent],
  exports: [DenvercoComponent, NewyorkComponent, HonoluluhawaiiComponent, LacaliComponent, SbmiamiComponent]
  
})
export class HotelPricesModule { }
