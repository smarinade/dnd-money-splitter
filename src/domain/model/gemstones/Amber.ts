import { Copper } from "../Copper";
import { Gemstone } from "./Gemstone";

export class Amber implements Gemstone {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public convertToCopper(): Copper {
    return new Copper(this.amount * 50000)
  }

  public static fromCopper(copper: number): [Amber, Copper] {
    const amber = new Amber(Math.floor(copper / 50000))
    const remainingCopper = new Copper(copper % 50000)
    return [amber, remainingCopper];
  }
}
