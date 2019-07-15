import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//add the httpclient module to enable http 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  //import the httpclientmodule
  imports: [CommonModule, HttpClientModule],
  //declare where the user module is used on
  declarations: [],
  //expor the component to use it
  exports: []
})
export class UserModule { }
