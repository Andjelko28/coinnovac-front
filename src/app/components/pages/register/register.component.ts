import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  isRegistered: boolean = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    // Inicijalizuj Reactive Form Group
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    if (this.userForm.invalid) {
      alert('Please enter valid information.');
      return;
    }

    const { email, password, confirmPassword } = this.userForm.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    this.auth.register({
      email, password,
      id: 0,
      isAdmin: false,
      confirmPassword: '',
      is_verified: false,
      cryptoa: ''
    }).subscribe(
      (data: any) => {
        if (data.success) {
          // Registrovanje uspjesno, moze preusmjeriti korisnika ili obaviti neku drugu akciju
          alert('Registration successful!');
        } else {
          alert('Registration failed. Please try again.');
        }
      },
      (error: any) => {
        alert('An error occurred during registration. Please try again.');
      }
    );
    window.location.href = '/';
  }
  // register() {
  //   //Uputi API poziv za register
  //   //Sacuvaj token (localStorage)
  //   if (!this.user.email || !this.user.password || !this.user.confirmPassword) {
  //     alert('Enter all informations');
  //     return;
  //   }

  //   if (this.user.password != this.user.confirmPassword) {
  //     alert('Passwords dont match');
  //     return;
  //   }

  //   this.auth.register(this.user).subscribe((data: any) => {
  //     if (data.succes) {
  //       data.token //je token
  //       localStorage.setItem('crypto', data.token);
  //       window.location.href = '/login'; //Poslije registracije ponovo ucitava aplikaciju
  //     }
  //   })
  // }
  close() {
    window.location.href = '/';
  }

  areFieldsValid(): any {
    return this.user.email && this.user.password && this.user.confirmPassword;
  }
}
