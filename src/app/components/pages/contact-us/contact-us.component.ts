import { Component } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  email: string;
  description: string;

  constructor(private serc: ContactService) { }

  onSubmit() {
    if (!this.email || !this.description) {
      alert('Please fill in both email and description fields.');
      return;
    }
    this.serc.contactMail(this.email, this.description).subscribe(
      response => {
        console.log('Email sent');
      },
      error => {
        console.log('Error sending email', error);
      }
    )
  }
}




