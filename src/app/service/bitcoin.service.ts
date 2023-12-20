import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { evnironment } from 'src/environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  public apiUrl: string = 'https://api.blockchain.com/v3/exchange/tickers';
  apiURL = evnironment.API_URL

  constructor(private http: HttpClient) { }

  getBitcoinData() {
    return this.http.get<any[]>(`${this.apiUrl}`)
  }

  getBitcoinPrice(): Observable<number> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data[133].price_24h)
    );
  }

  buyEmail(email: string, result: number, numberToMultiply: number, cryptoa: string) {
    const data = {
      email: email,
      result: result,
      numberToMultiply: numberToMultiply,
      cryptoa: cryptoa
    };
    return this.http.post<any>(`${this.apiURL}/buy`, data);
  }

}
