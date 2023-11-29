import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';
import { evnironment } from 'src/environments/environments.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 
   user: User = new User();


   constructor(private auth: AuthService) { }


    register() {
      //Uputi API poziv za register
      //Sacuvaj token (localStorage)
      if (!this.user.email || !this.user.password || !this.user.confirmPassword) {
        alert('Enter all informations');
        return;
      }

      if (this.user.password != this.user.confirmPassword) {
        alert('Passwords dont match');
        return;
      }

      this.auth.register(this.user).subscribe((data: any) => {
        if (data.succes) {
          alert('Registered');
          data.token //je token
          localStorage.setItem('crypto', data.token);
          window.location.href = '/';  //Poslije registracije ponovo ucitava aplikaciju
        }
      })
    }
  
   close() {
     window.location.href = '/';
   }

}
