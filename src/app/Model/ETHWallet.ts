import {CryptoWallet} from './CryptoWallet';
import {BuyOperation} from './BuyOperation';

export class ETHWallet extends CryptoWallet {

  constructor(currentValue: number) {
    super(currentValue);
    this.BuyOperations = new Array();
    this.BuyOperations.push(new BuyOperation(269.25646913, 1.0417577));
  }
}
