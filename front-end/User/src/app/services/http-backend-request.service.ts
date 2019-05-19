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
}
