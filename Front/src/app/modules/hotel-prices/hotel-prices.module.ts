import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenvercoComponent } from './denverco/denverco.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { HonoluluhawaiiComponent } from './honoluluhawaii/honoluluhawaii.component';
import { LacaliComponent } from './lacali/lacali.component';
import { SbmiamiComponent } from './sbmiami/sbmiami.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DenvercoComponent, NewyorkComponent, HonoluluhawaiiComponent, LacaliComponent, SbmiamiComponent],
  exports: [DenvercoComponent, NewyorkComponent, HonoluluhawaiiComponent, LacaliComponent, SbmiamiComponent]
  
})
export class HotelPricesModule { }
