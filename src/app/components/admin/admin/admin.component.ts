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

  constructor(private logService: ActionlogService) {
    this.enumKeys = Object.keys(this.status);
  }

  ngOnInit(): void {
    this.logService.getActionLog().subscribe((data: any) => {
      this.actionlog = data;
    });

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
