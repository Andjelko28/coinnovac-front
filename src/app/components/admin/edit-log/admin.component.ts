import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actionlog } from 'src/app/models/ActionLog';
import { ActionlogService } from 'src/app/service/actionlog.service';
import { evnironment } from 'src/environments/environments.development';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  actionLog: Actionlog = new Actionlog();
  edit: boolean = false;
  apiUrl = evnironment.API_URL;

  constructor(private aLogService: ActionlogService,
    private router: Router, private activatedRouter: ActivatedRoute) { }


  saveLog() {
    this.aLogService.insertNewLog(this.actionLog).subscribe((data: any) => {
      this.actionLog = data;
      this.router.navigateByUrl('table');
    })
  }
}