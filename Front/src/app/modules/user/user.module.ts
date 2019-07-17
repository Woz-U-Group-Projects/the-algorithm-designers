import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//add the httpclient module to enable http, along with forms and router modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//add the components I created
import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FindComponent } from './components/find/find.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';



@NgModule({
  //import the httpclientmodule
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  //declare where the user module is used on
  declarations: [AboutComponent, FeedbackComponent, FindComponent, HomeComponent, SigninComponent],
  //expor the component to use it
  exports: [AboutComponent, FeedbackComponent, FindComponent, HomeComponent, SigninComponent]
})
export class UserModule { }
