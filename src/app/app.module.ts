import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HelpersModule } from "./components/helpers/helpers.module";
import { HttpClientModule } from '@angular/common/http';
import { ActionlogComponent } from './components/pages/actionlog/actionlog.component';
import { AdminComponent } from './components/admin/edit-log/admin.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        ActionlogComponent,
        AdminComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HelpersModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
