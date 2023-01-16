import { CoinPouch } from "../model/CoinPouch";
import { convertCoinsToCopper, convertCopperToCoins } from "../ConversionService/ConversionService";

export interface DividedCoins {
  dividedCoins: CoinPouch[]
  remainingCoins?: CoinPouch
}

export const divide = (coins: CoinPouch, adventurers: number): DividedCoins => {
  const totalCopper = convertCoinsToCopper(coins)
  const dividedCopper = Math.floor(totalCopper / adventurers)
  const remainingCopper = totalCopper % adventurers

  const dividedCoins = []
  for (let i = 0; i < adventurers; i++) {
    dividedCoins.push(convertCopperToCoins(dividedCopper))
  }

  if (remainingCopper) {
    const remainingCoins = convertCopperToCoins(remainingCopper)
    return { dividedCoins, remainingCoins }
  }

  return { dividedCoins }
}

export const oldDivide = (coins: CoinPouch, adventurers: number): CoinPouch[] => {
  const totalCopper = convertCoinsToCopper(coins)
  const dividedCopper = Math.floor(totalCopper / adventurers)
  const remainingCopper = totalCopper % adventurers

  const pouches = []
  for (let i = 0; i < adventurers; i++) {
    pouches.push(convertCopperToCoins(dividedCopper))
  }

  if (remainingCopper) {
    pouches.push(convertCopperToCoins(remainingCopper))
  }

  return pouches
}
