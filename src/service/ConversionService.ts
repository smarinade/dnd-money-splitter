import {Coins} from "./Coins";

const convertPlatinumToCopper = (platinum: number) => platinum * 1000;
const convertGoldToCopper = (gold: number) => gold * 100;
const convertElectrumToCopper = (electrum: number) => electrum * 50;
const convertSilverToCopper = (silver: number) => silver * 10;

export const convertCoinsToCopper = (coins: Coins): number => {
    return convertPlatinumToCopper(coins.platinum) +
        convertGoldToCopper(coins.gold) +
        convertElectrumToCopper(coins.electrum) +
        convertSilverToCopper(coins.silver) +
        coins.copper;
};

export const convertCopperToCoins = (copper: number): Coins => {
    let remainingCopper = copper;
    let platinum : number = 0;
    let gold : number = 0;
    let electrum : number = 0;
    let silver : number = 0;

    if (remainingCopper >= 1000) {
        platinum = Math.floor(remainingCopper / 1000);
        remainingCopper = remainingCopper % 1000;
    }

    if (remainingCopper >= 100) {
        gold = Math.floor(remainingCopper / 100);
        remainingCopper = remainingCopper % 100;
    }

    if (remainingCopper >= 50) {
        electrum = Math.floor(remainingCopper / 50);
        remainingCopper = remainingCopper % 50;
    }

    if (remainingCopper >= 10) {
        silver = Math.floor(remainingCopper / 10);
        remainingCopper = remainingCopper % 10;
    }

    return new Coins(platinum,gold,electrum,silver,remainingCopper);
};