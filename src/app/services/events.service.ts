import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _eventsUrl = "http://localhost:3001/api/events";
  private _specialsUrl = "http://localhost:3001/api/specials";

  constructor(private http: HttpClient) { }

  fetchEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  fetchSpecials() {
    return this.http.get<any>(this._specialsUrl);
  }
}
