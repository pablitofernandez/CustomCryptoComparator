import {Component, OnInit} from '@angular/core';
import {CryptoCompareAPIService} from './Services/crypto_compare_api.service';
import {QTUMValue} from './Model/QTUMValue';
import {OMGValue} from './Model/OMGValue';
import {ETHValue} from './Model/ETHValue';
import {BTCValue} from './Model/BTCValue';
import {OMGWallet} from './Model/OMGWalllet';
import {QTUMWallet} from './Model/QTUMWallet';
import {ETHWallet} from './Model/ETHWallet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private cryptoCompareAPIService: CryptoCompareAPIService) {
  }

  title = 'Mi portfolio de criptomonedas';
  QTUMValue = new QTUMValue();
  OMGValue = new OMGValue();
  ETHValue = new ETHValue();
  BTCValue = new BTCValue();
  OMGWallet: OMGWallet;
  QTUMWallet: QTUMWallet;
  ETHWallet: ETHWallet;

  ngOnInit(): void {
    this.cryptoCompareAPIService.getQtumToBtc().then(value => {
      this.QTUMValue = value;
      this.QTUMWallet = new QTUMWallet(value.BTC);
    });
    this.cryptoCompareAPIService.getOmgToBtc().then(value => {
      this.OMGValue = value;
      this.OMGWallet = new OMGWallet(value.BTC);
    });
    this.cryptoCompareAPIService.getEthToEur().then(value => {
      this.ETHValue = value;
      this.ETHWallet = new ETHWallet(value.EUR);
    });
    this.cryptoCompareAPIService.getBtcToEur().then(value => this.BTCValue = value);
  }
}
