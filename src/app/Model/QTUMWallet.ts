export class QTUMWallet {
  BuyPrice = 0.00263200;
  Difference: number;
  Percentage: number;

  constructor(currentValue: number) {
    this.Difference = currentValue - this.BuyPrice;
    this.Percentage = (this.Difference / this.BuyPrice) * 100;
  }
}
