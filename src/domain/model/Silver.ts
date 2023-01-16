import { Coin } from "./Coin";
import { Copper } from "./Copper";

export class Silver implements Coin {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  public static fromCopper(copper: number): [Silver, Copper] {
    const silver = new Silver(Math.floor(copper / 10))
    const remainingCopper = new Copper(copper % 10)
    return [silver, remainingCopper]
  }

  public convertToCopper(): Copper {
    return new Copper(this.amount * 10)
  }
}
