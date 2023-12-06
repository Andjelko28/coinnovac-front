import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: User = new User();
  emailVerified: boolean = false;

  constructor(private auth: AuthService, private router: ActivatedRoute) { }

  login() {
    if (!this.user.email || !this.user.password) {
      alert('Fill all informations!');
      return;
    }
    this.auth.login(this.user).subscribe((data: any) => {
      if (data.succes) {
        localStorage.setItem('crypto', data.token);
        window.location.href = '/';
      }
      else if (this.emailVerified == false) {
        alert('Email not verified')
      } else if (this.user.email !== data || this.user.password !== data) {
        alert('Wrong informations')
      }
    })
  }
  close() {
    window.location.href = '/';
  }

}
