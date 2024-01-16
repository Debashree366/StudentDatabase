
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = "https://jsonplaceholder.typicode.com/users"
  constructor(
    private http : HttpClient,
  ) { }

 
  getAllUsers(){
    return this.http.get(this.baseUrl);
 }
  
 postUsers(responsebody){
  return this.http.post(this.baseUrl, responsebody);
}
}
