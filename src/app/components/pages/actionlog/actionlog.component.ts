import { Component, OnInit } from '@angular/core';
import { Actionlog } from 'src/app/models/ActionLog';
import { ActionlogService } from 'src/app/service/actionlog.service';
@Component({
  selector: 'app-actionlog',
  templateUrl: './actionlog.component.html',
  styleUrls: ['./actionlog.component.scss']
})
export class ActionlogComponent {
  act: Actionlog[] = [];
  no: number = 1;

  constructor(private logService: ActionlogService) { }
  ngOnInit(): void {
    this.logService.getActionLog().subscribe((data: any) => {
      console.log(data);
      this.act = data;
    })
  }

}

