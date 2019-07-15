import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserInfo } from './user-info';
import { User } from './model/user';
import { JwtResponse } from './model/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  //variable that holds the server address
 Auth_Server ="http://localhost:4200";

 //tracks the users authenticaion state
 authSubject = new BehaviorSubject(false);

//   getUser() : Observable<UserInfo[]>{
//     return this.httpClient.get<UserInfo[]>(this.url);
//   }


//sending a POST request with HTTPClient - singup
register(user: User): Observable<JwtResponse> {
  return this.httpClient.post<JwtResponse>(`${this.Auth_Server}/home`, user).pipe(
    tap((res:  JwtResponse ) => {

      if (res.user) {
        localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
        localStorage.set("EXPIRES_IN", res.user.expires_in);
        this.authSubject.next(true);
      }
    })

  );
}

  //sending a POST request with HTTPClient -signIn
  signIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.Auth_Server}/signin`, user).pipe(
      tap(async (res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
         // localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  //removing the jwt token from local storage -singout
  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    //localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }

  //returning the authsubject as observable
  isAuthenticated() {
    return  this.authSubject.asObservable();
}

  constructor(private httpClient: HttpClient) { }
}
