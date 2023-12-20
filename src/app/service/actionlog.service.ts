import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evnironment } from 'src/environments/environments';
import { Actionlog } from '../models/ActionLog';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActionlogService {

  apiUrl = evnironment.API_URL;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getActionLog(): any {
    return this.http.get<Actionlog[]>(`${this.apiUrl}/table`);
  }

  getLogByMail(user_mail: string): Observable<Actionlog> {
    return this.http.get<Actionlog>(`${this.apiUrl}/user-logs/${user_mail}`);
  }

  insertNewLog(actionlog: Actionlog) {
    return this.http.post(`${this.apiUrl}/table`, actionlog);
  }

  updateLog(actionlog: Actionlog) {
    return this.http.put(`${this.apiUrl}/admin/${actionlog.id}`, actionlog);
  }

  deleteLog(actionLog: Actionlog) {
    return this.http.delete(`${this.apiUrl}/admin/${actionLog.id}`);
  }

}
