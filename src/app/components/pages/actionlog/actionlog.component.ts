import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actionlog } from 'src/app/models/ActionLog';
import { ActionlogService } from 'src/app/service/actionlog.service';

@Component({
  selector: 'app-actionlog',
  templateUrl: './actionlog.component.html',
  styleUrls: ['./actionlog.component.scss']
})
export class ActionlogComponent implements OnInit {

  actionlog: Actionlog[] = [];
  no: number = 1;

  constructor(private logService: ActionlogService, private router: Router) { }
  ngOnInit(): void {
    this.logService.getActionLog().subscribe(data => {
      this.actionlog = data;
    });
  }
}
