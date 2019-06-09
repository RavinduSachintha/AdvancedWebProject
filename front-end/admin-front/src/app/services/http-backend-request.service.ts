import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpBackendRequestService {
  constructor(private http: HttpClient) {}

  // POST request sending function
  realizarHttpPost(requestType: string, bodyObject: Object) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(requestType, bodyObject, {
      headers: headers
    });
  }

  // POST request sending function with token
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

  // PUT request sending function with token
  realizarHttpPutWithToken(requestType: string, bodyObject: Object) {
    const token = localStorage.getItem("accessToken");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": token
    });
    return this.http.put(requestType, bodyObject, {
      headers: headers
    });
  }

  // GET request sending function with token
  realizarHttpGetWithToken(requestType: string) {
    const token = localStorage.getItem("accessToken");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": token
    });
    return this.http.get(requestType, {
      headers: headers
    });
  }

  // DELETE request sending function
  realizarHttpDeleteWithToken(requestType: string) {
    const token = localStorage.getItem("accessToken");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-access-token": token
    });
    return this.http.delete(requestType, {
      headers: headers
    });
  }
}
