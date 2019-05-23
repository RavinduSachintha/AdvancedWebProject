import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpBackendRequestService {
  constructor(private http: HttpClient) {}

  // GET request sending function without token
  realizarHttpGetWithoutToken(requestType: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get(requestType, {
      headers: headers
    });
  }

  // POST request sending function with Token
  realizarHttpPostWithToken(requestType: string, bodyObject: Object) {
    const token = localStorage.getItem("accessToken");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": token
    });
    return this.http.post(requestType, bodyObject, {
      headers: headers
    });
  }

  // POST request sending function without Token
  realizarHttpPostWithoutToken(requestType: string, bodyObject: Object) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(requestType, bodyObject, {
      headers: headers
    });
  }

}
