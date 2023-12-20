import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actionlog } from 'src/app/models/ActionLog';
import { User } from 'src/app/models/User';
import { ActionlogService } from 'src/app/service/actionlog.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router: Router, private logService: ActionlogService) { }
  user: User = new User();
  a: Actionlog = new Actionlog();
  

  email = this.auth.isLoggedIn() ? this.auth.getUserData().email : '';
  isLoggedIn = this.auth.isLoggedIn();
  isAdmin = this.auth.getAdminData();

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

}
