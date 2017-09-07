export class OMGWallet {
  BuyPrice = 0.00256253;
  Difference: number;
  Percentage: number;

  constructor(currentValue: number) {
    this.Difference = currentValue - this.BuyPrice;
    this.Percentage = (this.Difference / this.BuyPrice) * 100;
  }
}
