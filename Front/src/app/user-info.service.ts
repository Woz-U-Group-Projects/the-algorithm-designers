import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

url: string = "http://localhost:3002/users";

  getUser() : Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
