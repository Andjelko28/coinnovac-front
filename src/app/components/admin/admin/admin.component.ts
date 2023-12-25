import { Component, OnInit } from '@angular/core';
import { LogStatus } from 'src/app/enums/status-enum';
import { Actionlog } from 'src/app/models/ActionLog';
import { ActionlogService } from 'src/app/service/actionlog.service';
import { evnironment } from 'src/environments/environments.development';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  actionlog: Actionlog[] = [];
  no: number = 1;
  apiUrl = evnironment.API_URL;
  status = LogStatus;
  enumKeys = [];
  pageSize: number = 5;
  currentPage: number = 1;
  totalItems: number = 0;
  pages: number[] = [];

  constructor(private logService: ActionlogService) {
    this.enumKeys = Object.keys(this.status);
  }

  ngOnInit(): void {
    this.logService.getActionLog().subscribe((data: any) => {
      this.actionlog = data;
      this.totalItems = this.actionlog.length;
      this.updatePages()
    });

  }

  updatePages() {
    this.pages = [];
    const pageCount = Math.ceil(this.totalItems / this.pageSize);
    for (let i = 1; i <= pageCount; i++) {
      this.pages.push(i);
    }
  }

  getPagedLogs(): any[] {
    // Izracunaj indeks prvog loga na trenutnoj stranici
    const startIndex = (this.currentPage - 1) * this.pageSize;

    // Vrati niz logova za trenutnu stranicu
    return this.actionlog.slice(startIndex, startIndex + this.pageSize);
  }

  setPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.pages.length) {
      this.currentPage = pageNumber;
    }
  }
  updateLog(actionLog: Actionlog) {
    this.logService.updateLog(actionLog).subscribe(
      (response) => {
        console.log('Updated', response);
      },
      (error) => {
        console.error('Error', error)
      }
    );
  }

  deleteLog(actionlog: Actionlog) {
    const confirmation = confirm('Are you sure you want to delete this log?');

    if (confirmation) {
      this.logService.deleteLog(actionlog).subscribe(
        () => {
          // Azuriranje podataka nakon brisanja
          this.actionlog = this.actionlog.filter(log => log.id !== actionlog.id);
          console.log('Log deleted successfully.');
        },
        (error) => {
          console.error('Error deleting log:', error);
        }
      );
    }
  }
}
