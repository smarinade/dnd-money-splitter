import {Coins} from "./Coins";
import {convertCoinsToCopper, convertCopperToCoins} from "./ConversionService";

export const divide = (coins: Coins, adventurers: number) : Coins[] => {
    const totalCopper = convertCoinsToCopper(coins);
    const dividedCopper = Math.floor(totalCopper / adventurers);
    const remainingCopper = totalCopper % adventurers;

    const pouches = [];
    for (let i = 0; i < adventurers; i++) {
        pouches.push(convertCopperToCoins(dividedCopper))
    }

    if (remainingCopper) {
        pouches.push(convertCopperToCoins(remainingCopper));
    }

    return pouches;
};

const exchangeCopper = (dividedCopper: number) : Coins => {
    return new Coins(0,0,0,0,0);
};