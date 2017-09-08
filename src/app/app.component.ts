import {Component, OnInit} from '@angular/core';
import {CryptoCompareAPIService} from './Services/crypto_compare_api.service';
import {QTUMValue} from './Model/QTUMValue';
import {OMGValue} from './Model/OMGValue';
import {ETHValue} from './Model/ETHValue';
import {BTCValue} from './Model/BTCValue';
import {OMGWallet} from './Model/OMGWalllet';
import {QTUMWallet} from './Model/QTUMWallet';
import {ETHWallet} from './Model/ETHWallet';
import {BuyOperation} from './Model/BuyOperation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private cryptoCompareAPIService: CryptoCompareAPIService) {
  }

  title = 'Mi portfolio de criptomonedas';
  OMGValue = new OMGValue();
  ETHValue = new ETHValue();
  BTCValue = new BTCValue();
  OMGWallet: OMGWallet;
  QTUMWallet: QTUMWallet;
  ETHWallet: ETHWallet;
  TotalDifference = 0;
  TotalActualValue = 0;

  ngOnInit(): void {

    this.cryptoCompareAPIService.getBtcToEur().then(value => {
      this.BTCValue = value;

      this.cryptoCompareAPIService.getQtumToBtc().then(qtumvalue => {
        this.QTUMWallet = new QTUMWallet(qtumvalue.BTC);
      });
      this.cryptoCompareAPIService.getOmgToBtc().then(omgvalue => {
        this.OMGValue = omgvalue;
        this.OMGWallet = new OMGWallet(omgvalue.BTC);
      });
      this.cryptoCompareAPIService.getEthToEur().then(ethvalue => {
        this.ETHValue = ethvalue;
        this.ETHWallet = new ETHWallet(ethvalue.EUR);
      });
    });
  }

  getTotalDifference(): number {
    return this.OMGWallet.getTotalDifference() * this.BTCValue.EUR +
      this.QTUMWallet.getTotalDifference() * this.BTCValue.EUR + this.ETHWallet.getTotalDifference();
  }

  getTotalActualValue(): number {
    return this.OMGWallet.getTotalActualValue() * this.BTCValue.EUR +
      this.QTUMWallet.getTotalActualValue() * this.BTCValue.EUR + this.ETHWallet.getTotalActualValue();
  }

  hasBenefits(): boolean {
    return this.getTotalDifference() > 0;
  }
}
