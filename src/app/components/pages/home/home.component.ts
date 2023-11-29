import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public getBitcoin: any[];

  constructor(private bitcoinService: BitcoinService, private router: Router) { }
  ngOnInit(): void {
    this.bitcoinService.getBitcoinData().subscribe((data: any) => {
      this.getBitcoin = [data[133]]
    })
  }

  navigate() {
    this.router.navigate(['/buy']);
  }
}
