import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actionlog } from 'src/app/models/ActionLog';
import { ActionlogService } from 'src/app/service/actionlog.service';
import { AuthService } from 'src/app/service/auth.service';
import { evnironment } from 'src/environments/environments.development';

@Component({
  selector: 'app-actionlog',
  templateUrl: './actionlog.component.html',
  styleUrls: ['./actionlog.component.scss']
})
export class ActionlogComponent implements OnInit {
  act: Actionlog[] = [];
  no: number = 1;
  apiUrl = evnironment.API_URL;
  userEmail: string = '';
  pageSize: number = 5;
  currentPage: number = 1;
  totalItems: number = 0;
  pages: number[] = [];

  constructor(private logService: ActionlogService, private authService: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
    // let userMail = 'test1';
    // this.logService.getLogByMail(userMail).subscribe((data: any) => {
    //   this.act = data;
    //   console.log(data);
    // })
    this.userEmail = this.getUserData() || '';
    if (this.userEmail) {
      this.logService.getLogByMail(this.userEmail).subscribe((data: any) => {
        this.act = data;
      })
    }
  }
  updatePages() { // 
    this.pages = [];
    const pageCount = Math.ceil(this.totalItems / this.pageSize);
    for (let i = 1; i <= pageCount; i++) {
      this.pages.push(i);
    }
  }

  getPagedLogs(): any[] {
    // Izracunava indeks prvog loga na trenutnoj stranici, isracunava index, zatim slicuje prethodne logove i prikazazuje samo logove na trenutnoj stranici...
    const startIndex = (this.currentPage - 1) * this.pageSize;

    // Vrati niz logova za trenutnu stranicu
    return this.act.slice(startIndex, startIndex + this.pageSize);
  }

  setPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.currentPage = pageNumber;
    }
  }

  getUserData() {
    const token = localStorage.getItem('crypto');
    if (!token) return null;
    const tokenParts = token.split('.');
    const userDataPart = tokenParts[1];
    const user = JSON.parse(window.atob(userDataPart));
    return user?.email || null;
  }
}

