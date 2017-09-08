import {CryptoWallet} from './CryptoWallet';
import {BuyOperation} from './BuyOperation';

export class QTUMWallet extends CryptoWallet {

  constructor(currentValue: number) {
    super(currentValue);
    this.BuyOperations = new Array();
    this.BuyOperations.push(new BuyOperation(0.00263199, 6.00507979));
  }
}
