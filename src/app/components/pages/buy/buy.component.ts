import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { BitcoinService } from 'src/app/service/bitcoin.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {

  user: User = new User();

  numberToMultiply: number = 0;
  result: number = 0;

  constructor(private bitcoinService: BitcoinService, private router: Router) { }

  calculateResult(): any {
    this.bitcoinService.getBitcoinPrice().subscribe((bitcoinPrice: number) => {
      this.result = this.numberToMultiply * bitcoinPrice;
      localStorage.setItem('bitcoinResult', this.result.toString())
    })
  }

  saveButton() {
    if (this.result === 0) {
      alert('You need to enter values!')
    } else if (this.user.email == null) {
      alert('Fill email field')
    } 
    localStorage.setItem('email', this.user.email);
  }
}
