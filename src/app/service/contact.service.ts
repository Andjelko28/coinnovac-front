import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evnironment } from 'src/environments/environments.development';




@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiURL = evnironment.API_URL

  constructor(private http: HttpClient) { }

  contactMail(email: string, description: string) {
    const formData = {
      email: email,
      description: description
    };
    return this.http.post<any>(`${this.apiURL}/contact`, formData);
  }
}



