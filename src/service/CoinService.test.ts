import {Coins} from "./Coins";
import {transformCoinsToCopper} from "./CoinTransformService";

export const divide = (coins: Coins, adventurers: number) : Coins[] => {
    const totalCopper = transformCoinsToCopper(coins);
    const dividedCopper = Math.floor(totalCopper / adventurers);
    const remainingCopper = totalCopper % adventurers;

    const pouches = [];
    for (let i = 0; i < adventurers -1; i++) {
        pouches.push(new Coins(0, 0, 0, 0, dividedCopper))
    }

    if (remainingCopper) {
        pouches.push(new Coins(0, 0, 0, 0, remainingCopper));
    }

    return pouches;
};