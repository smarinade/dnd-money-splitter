import { Coin } from "./Coin";

export class Copper implements Coin {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }
}
