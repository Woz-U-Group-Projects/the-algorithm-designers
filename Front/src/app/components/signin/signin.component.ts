import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../user-info.service';
import { UserInfo } from '../../user-info';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private authService: UserDataService, private router: Router) { }

  ngOnInit() {
  }

  //we subscribe to the returned Observable and we
  //use the router navigateByUrl() method to navigate 
  //to the home page
  login(form){
    console.log(form.value);
    this.authService.signIn(form.value).subscribe((res)=>{
      console.log("Logged in!");
      this.router.navigateByUrl('home');
    });    
  }

}
