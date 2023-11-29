import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  public apiUrl: string = 'https://api.blockchain.com/v3/exchange/tickers';

  constructor(private http: HttpClient) { }

  getBitcoinData() {
    return this.http.get<any[]>(`${this.apiUrl}`)
  }

  getBitcoinPrice():Observable<number>{
    return this.http.get<any[]>(this.apiUrl).pipe( // 
      map(data => data[133].price_24h)
    );
  }

}
