import { Coin } from "./Coin";
import { Copper } from "./Copper";

export class Platinum implements Coin {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  public static fromCopper(copper: number): [Platinum, Copper] {
    const platinum = new Platinum(Math.floor(copper / 1000))
    const remainingCopper = new Copper(copper % 1000)
    return [platinum, remainingCopper]
  }

  public convertToCopper(): Copper {
    return new Copper(this.amount * 1000)
  }
}
