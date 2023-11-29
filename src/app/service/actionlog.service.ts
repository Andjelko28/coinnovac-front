import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evnironment } from 'src/environments/environments';
import { Actionlog } from '../models/ActionLog';

@Injectable({
  providedIn: 'root'
})
export class ActionlogService {
 
  apiUrl = evnironment.API_URL;

  constructor(private http: HttpClient) { }

  getActionLog() {
    return this.http.get<Actionlog[]>(`${this.apiUrl}/table`);
  }

  getLogByID(id: number) {
    return this.http.get<Actionlog>(`${this.apiUrl}/table/${id}`);
  }

  insertNewLog(actionlog: Actionlog) {
    return this.http.post(`${this.apiUrl}/table`, actionlog);
  }

  updateLog(actionlog: Actionlog) {
    return this.http.put(`${this.apiUrl}/table/${actionlog.id}`, actionlog);
  }

}
