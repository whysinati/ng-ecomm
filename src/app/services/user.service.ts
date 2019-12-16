import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  // test() {
  // test(): string {
  //   return 'success!';
  // }
  //Return an Observable array of User objects
  test(): Observable<User[]>{
    let url = 'http://localhost:3000/api/users'
    return this.http.get<User[]>(url);
  }
}
