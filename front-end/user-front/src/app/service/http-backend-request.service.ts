import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBackendRequestService {

  constructor(private http: HttpClient) { }

  //post request sending function without token
  realizarHttpPost(requestType: string, bodyObject: Object) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json"
    });
    return this.http.post(requestType, bodyObject, { headers: headers});
  }

  //get request sending fucntion with token
  realizerHttpGetWithToken(requestType: string, bodyObject: object) {
    const token = localStorage.getItem("accessToken");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": token
    });
    return this.http.get(requestType, {headers: headers});
  }

}
