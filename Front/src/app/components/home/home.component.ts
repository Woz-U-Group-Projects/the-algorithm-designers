import { Component, OnInit } from '@angular/core';
//these will be used to allow access to HTTP methods and to set the headers
//of the http requests
import { HttpClient, HttpHeaders} from '@angular/common/http';
//use rxjs so the response can be handled as an observable 
import { of } from 'rxjs';
//impor the user information model
import { User } from '../../model/user';

import { Router } from '@angular/router';
import { UserDataService } from '../../user-info.service';
import { UserInfo } from '../../user-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //holds the route which holds the json array of user info
   userRoute = 'http://localhost:4200/home';
  //the public user is set the the model User with the type of array
  public user: User[];

  //setting the http property to HttpClient will allow access to 
  //the CRUD methods within HttpClient. then be accessible to the
  //observer using dot notation
  constructor(private authService: UserDataService, private router: Router) { }

  //access the http method get by using dot notation
  //to get the user Route property
  //the observableis then allowed to come in and pass the user
  //into the call back function .subscribe
  //within .subscribe is where this.user can be assigned the values
  //that come back from the server
  // getUser(){
  //   this.http.get<User[]>(this.userRoute).subscribe(user => {
  //     this.user = user;
  //     console.log("Users", this.user);
  //   });
  // }

  // postUser() {
  //   this.http.post<User[]>(this.userRoute).subscribe(user => {
  //     this.user = user;
  //     console.log("User", this.user);
  //   });
  // }

  // addUser(UserId, FirstName, LastName, Email, Username, Password){
  //   const userInfo = {
  //     UserId: UserId,
  //     FirstName: FirstName,
  //     LastName: LastName,
  //     Email: Email,
  //     UserName: Username,
  //     Password: Password
  //   };
  //   return this.http.post('this.userRoute/',userInfo);
  // }


  ngOnInit() {
    //this.getUser();
    //this.postUser();
  
  }

  //we subscribe to the returned Observable and we
  //use the router navigateByUrl() method to navigate 
  //to the home page
   register(form) {
     console.log(form.value);
     this.authService.register(form.value).subscribe((res) => {
       this.router.navigateByUrl('home');
     });
     
   }


}
