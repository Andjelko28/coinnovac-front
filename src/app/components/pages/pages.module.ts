import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyComponent } from './buy/buy.component';
import { HelpersModule } from '../helpers/helpers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActionlogComponent } from './actionlog/actionlog.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    BuyComponent,
    RegisterComponent,
    LoginComponent,
    ActionlogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HelpersModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
