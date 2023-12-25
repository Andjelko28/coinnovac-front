import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { evnironment } from 'src/environments/environments';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = new User();
  apiUrl = evnironment.API_URL;

  constructor(private http: HttpClient) { }

  // private readonly tokenKey = 'crypto';

  // setToken(token: string): void {
  //   localStorage.setItem(this.tokenKey, token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);
  // }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: User) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }


  isLoggedIn() {
    const token = localStorage.getItem('crypto');
    if (token) return true;
    return false;
  }

  getUserData() {
    const token = localStorage.getItem('crypto');
    if (!token) return null;
    const tokenParts = token.split('.');
    const userDataPart = tokenParts[1];
    const user = JSON.parse(window.atob(userDataPart));
    return user;
  }

  getAdminData() {
    const token = localStorage.getItem('crypto');
    if (!token) return null;
    const tokenParts = token.split('.');
    const userDataPart = tokenParts[1];
    const user = JSON.parse(window.atob(userDataPart));
    return user.isAdmin;
  }

}
