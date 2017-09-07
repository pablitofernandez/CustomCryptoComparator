import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';
import {QTUMValue} from '../Model/QTUMValue';
import {Observable} from 'rxjs/Rx';
import {OMGValue} from "../Model/OMGValue";
import {ETHValue} from "../Model/ETHValue";
import {BTCValue} from "../Model/BTCValue";

@Injectable()
export class CryptoCompareAPIService {

  private apiUrl = 'https://min-api.cryptocompare.com/data/price'; //?fsym=QTUM&tsyms=QTUM,BTC';

  constructor(private http: Http) {}

  getQtumToBtc(): Promise<QTUMValue> {
    return this.http.get(this.apiUrl + '?fsym=QTUM&tsyms=QTUM,BTC')
      .map(this.extractData)
      .toPromise()
      .catch(this.handleError);
  }

  getOmgToBtc(): Promise<OMGValue> {
    return this.http.get(this.apiUrl + '?fsym=OMG&tsyms=OMG,BTC')
      .map(this.extractData)
      .toPromise()
      .catch(this.handleError);
  }

  getEthToEur(): Promise<ETHValue> {
    return this.http.get(this.apiUrl + '?fsym=ETH&tsyms=ETH,EUR')
      .map(this.extractData)
      .toPromise()
      .catch(this.handleError);
  }

  getBtcToEur(): Promise<BTCValue> {
    return this.http.get(this.apiUrl + '?fsym=BTC&tsyms=BTC,EUR')
      .map(this.extractData)
      .toPromise()
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
