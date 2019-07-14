import { NgModule } from '@angular/core';
//import the routes and routermodule so i can use them
import { Routes, RouterModule } from '@angular/router';
//impor the components to be rendered when routing
import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent} from './components/find/find.component'
import { SigninComponent } from './components/signin/signin.component';
import { DenvercoComponent } from './components/denverco/denverco.component'
import { LacaliComponent } from './components/lacali/lacali.component';
import { HonoluluhawaiiComponent } from './components/honoluluhawaii/honoluluhawaii.component';
import { NewyorkComponent } from './components/newyork/newyork.component';
import { SbmiamiComponent } from './components/sbmiami/sbmiami.component';

//the routes array is applying the Routes type 
//that was imported at the top. the array is a collection
//of objects and each object represents an individual route
const routes: Routes = [
  //add the components to be rendered in the array
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'denverco',
    component: DenvercoComponent
  },
  {
    path: 'lacali',
    component: LacaliComponent
  },
  {
    path: 'honoluluhawaii',
    component: HonoluluhawaiiComponent
  },
  {
    path: 'newyork',
    component: NewyorkComponent
  },
  {
    path: 'sbmiami',
    component: SbmiamiComponent
  }
];

@NgModule({
  /*the RouterModule, which has been imported, 
  allows me to create navigation between the 
  different components while maintaining 
  information about which routes the user is 
  navigating to. This way i can track where a 
  user has been, as well as the data they 
  submitted up until that point, in case they 
  want to go back
  
  The forRoot static method, of the RouterModule, 
  creates a module with all of the router 
  providers and directives. The first parameter, 
  routes, is the Routes constant that i created 
  previously.
  */
  imports: [RouterModule.forRoot(routes)],
  //exporting the routermodule will provide access to the routermodule
  //and router directives from other parts of the application
  exports: [RouterModule]
})
export class AppRoutingModule { }
