import { Component, OnInit, Input } from '@angular/core';
//these will be used to allow access to HTTP methods and to set the headers of the http requests
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import the router to navigate correctly
import { Router } from '@angular/router';
import { of } from 'rxjs';
//import the user information model
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userRoute = 'http://localhost:3000/users/signup';
  public user: User = new User();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

    //add a user
    addUser(){
      this.http.post(this.userRoute, this.user).subscribe((res: Response) => {
        this.router.navigate(['']);
        console.log('User', this.user);
      }); 
    }

}
