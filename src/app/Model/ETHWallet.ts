export class ETHWallet {
  BuyPrice = 280.5;
  Difference: number;
  Percentage: number;

  constructor(currentValue: number) {
    this.Difference = currentValue - this.BuyPrice;
    this.Percentage = (this.Difference / this.BuyPrice) * 100;
  }
}
