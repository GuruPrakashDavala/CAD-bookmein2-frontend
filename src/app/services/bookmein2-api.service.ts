import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class Bookmein2APIService {
  constructor(public http: HttpClient) {}

  getPopularSessions() {
    return this.http.get("http://localhost:3000/eventregistrations");
  }
}
