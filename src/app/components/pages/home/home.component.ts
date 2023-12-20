import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public getBitcoin: any[];

  constructor(private bitcoinService: BitcoinService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.bitcoinService.getBitcoinData().subscribe((data: any) => {
      this.getBitcoin = [data[133.]]
    })
  }

  navigate() {
    if (this.isLoggedIn) {
      this.router.navigate(['/buy']);
    } else {
      this.router.navigate(['/login'])
    }
  }

  isLoggedIn = this.authService.isLoggedIn();

}
