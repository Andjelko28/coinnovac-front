import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

   user: User = new User();

   constructor(private auth: AuthService) { }

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
       else {
         alert('Wrong informations')
       }
     })
   }

   close() {
     window.location.href = '/';
   }

}
