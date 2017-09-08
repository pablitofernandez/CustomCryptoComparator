import {BuyOperation} from './BuyOperation';

export class CryptoWallet {
  BuyOperations: BuyOperation[] = new Array();
  CurrentValue = 0;

  constructor(currentValue: number) {
    this.CurrentValue = currentValue;
  }

  getDifference(buyOperation: BuyOperation): number {
    return (this.CurrentValue - buyOperation.BuyPrice) * buyOperation.UnitsBought;
  }

  getPercentage(buyOperation: BuyOperation): number {
    return ((this.CurrentValue - buyOperation.BuyPrice) / buyOperation.BuyPrice) * 100;
  }

  getActualValue(buyOperation: BuyOperation): number {
    return this.CurrentValue * buyOperation.UnitsBought;
  }

  getTotalActualValue(): number {
    let totalActualValue = 0;
    for (let buyOperation of this.BuyOperations) {
      totalActualValue += this.getActualValue(buyOperation);
    }
    return totalActualValue;
  }

  getTotalDifference(): number {
    let difference = 0;
    for (let buyOperation of this.BuyOperations) {
      difference += this.getDifference(buyOperation);
    }
    return difference;
  }

  hasBenefits(buyOperation: BuyOperation): boolean {
    return this.getDifference(buyOperation) > 0;
  }
}
