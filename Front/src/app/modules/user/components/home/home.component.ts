import { Component, OnInit } from '@angular/core';
//these will be used to allow access to HTTP methods and to set the headers
//of the http requests
import { HttpClient, HttpHeaders} from '@angular/common/http';
//use rxjs so the response can be handled as an observable 
import { of } from 'rxjs';
//impor the user information model
import { User } from '../../../../models/user';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
