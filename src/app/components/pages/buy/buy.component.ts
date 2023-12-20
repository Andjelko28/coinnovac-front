import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actionlog } from 'src/app/models/ActionLog';
import { User } from 'src/app/models/User';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { ActionlogService } from 'src/app/service/actionlog.service';
import { LogStatus } from 'src/app/enums/status-enum';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {

  user: User = new User();


  actionLog: Actionlog[] = [];
  numberToMultiply: number = 0;
  user_mail: string;
  result: any = 0;
  cryptoa: any;
  id: any;

  constructor(private bitcoinService: BitcoinService, private router: Router, private actionLogService: ActionlogService) { }

  calculateResult(): any {
    this.bitcoinService.getBitcoinPrice().subscribe((bitcoinPrice: number) => {
      this.result = this.numberToMultiply * bitcoinPrice;
      localStorage.setItem('bitcoinResult', this.result.toString());
    })
  }


  saveButton() {
    if (this.result === 0) {
      alert('You need to enter values!')
    } else if (this.user_mail == null) {
      alert('Fill email field')
    }
    const dataToUpdate = {
      id: 0,
      crypto: 'BTC',
      currency: 'EUR',
      amount_due: this.result,
      crypto_adress: this.cryptoa,
      status: '',
      user_mail: this.user_mail,
      updated: new Date(),
      created: new Date(),
      log_status: LogStatus
    }
    console.log(this.cryptoa);
    this.bitcoinService.buyEmail(this.user.email, this.result, this.numberToMultiply, this.cryptoa).subscribe(
      response => {
        console.log('Email sent');
      },
      error => {
        console.log('Error sending mail', error);
      }
    )
    this.actionLogService.insertNewLog(dataToUpdate).subscribe((data: any) => {
      this.actionLog = data;
      this.router.navigateByUrl('table');
    });
  }


}
