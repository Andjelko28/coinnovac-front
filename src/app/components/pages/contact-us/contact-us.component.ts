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
    this.serc.contactMail(this.email, this.description).subscribe(
      response => {
        console.log('Email sent');
      },
      error => {
        console.log('Error sendin email', error);
      }
    )
  }
}




