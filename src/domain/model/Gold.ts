import { Coin } from "./Coin";
import { Copper } from "./Copper";

export class Gold implements Coin {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  public convertToCopper(): Copper {
    return new Copper(this.amount * 100)
  }

  public static fromCopper(copper: number): [Gold, Copper] {
    const gold = new Gold(Math.floor(copper / 100))
    const remainingCopper = new Copper(copper % 100)
    return [gold, remainingCopper]
  }
}
