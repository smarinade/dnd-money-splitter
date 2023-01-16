import { Coin } from "./Coin";
import { Copper } from "./Copper";

export class Electrum implements Coin {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  public convertToCopper(): Copper {
    return new Copper(this.amount * 50)
  }

  public static fromCopper(copper: number): [Electrum, Copper] {
    const electrum = new Electrum(Math.floor(copper / 50))
    const remainingCopper = new Copper(copper % 50)
    return [electrum, remainingCopper]
  }
}
