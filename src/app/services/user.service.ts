import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user';

//this creates a JSON header [why is it outside the export class?]
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //add URL as an instance variable
  private url:string = 'http://localhost:3000/api/auth';
  
  constructor(private http:HttpClient) { }
  
  // test() {
  // test(): string {
  //   return 'success!';
  // }
  //Return an Observable array of User objects
  // test(): Observable<User[]>{
  login(user: User): Observable<User> {
    // let url = 'http://localhost:3000/api/users'
    // return this.http.get<User[]>(url);
    return this.http.post<User>(`${this.url}/login`, user, httpOptions);
  }
}
