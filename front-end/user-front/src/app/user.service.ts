import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }

  getOneUserProfile(id) {
    return this.http.get(`${this.uri}/profile/${id}`);
  }

}
