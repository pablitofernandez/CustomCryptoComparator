import {CryptoWallet} from './CryptoWallet';
import {BuyOperation} from './BuyOperation';

export class OMGWallet extends CryptoWallet {

  constructor(currentValue: number) {
    super(currentValue);
    this.BuyOperations = [ new BuyOperation(0.00256252, 6.13707756) ];
  }
}
