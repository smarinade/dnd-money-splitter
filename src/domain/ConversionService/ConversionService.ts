import {CoinPouch} from "../model/CoinPouch";
import {Platinum} from "../model/Platinum";
import {Gold} from "../model/Gold";
import {Electrum} from "../model/Electrum";
import {Silver} from "../model/Silver";
import {Copper} from "../model/Copper";

export const convertCoinsToCopper = (coins: CoinPouch): number => {
    return new Platinum(coins.platinum).convertToCopper().amount +
        new Gold(coins.gold).convertToCopper().amount +
        new Electrum(coins.electrum).convertToCopper().amount +
        new Silver(coins.silver).convertToCopper().amount +
        new Copper(coins.copper).amount;
};

export const convertCopperToCoins = (copper: number): CoinPouch => {
    let remainingCopper : number = copper;
    const platinumResult : [Platinum, Copper] = Platinum.fromCopper(remainingCopper);
    remainingCopper = platinumResult[1].amount;

    const goldResult : [Gold, Copper] = Gold.fromCopper(remainingCopper);
    remainingCopper = goldResult[1].amount;

    const electrumResult : [Electrum, Copper] = Electrum.fromCopper(remainingCopper);
    remainingCopper = electrumResult[1].amount;

    const silverResult : [Silver, Copper] = Silver.fromCopper(remainingCopper);
    remainingCopper = silverResult[1].amount;

    return new CoinPouch(platinumResult[0].amount, goldResult[0].amount, electrumResult[0].amount, silverResult[0].amount, remainingCopper);
};