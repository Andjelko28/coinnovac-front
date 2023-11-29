import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  email = this.auth.isLoggedIn() ? this.auth.getUserData().email : '';
  isLoggedIn = this.auth.isLoggedIn();

  constructor(private auth: AuthService) { }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
}
