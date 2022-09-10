import {Coins} from "./Coins";

const transformPlatinumToCopper = (platinum: number) => platinum * 1000;
const transformGoldToCopper = (gold: number) => gold * 100;
const transformElectrumToCopper = (electrum: number) => electrum * 50;
const transformSilverToCopper = (silver: number) => silver * 10;

const transformCopperToPlatinum = (platinum: number) => platinum * 1000;

export const transformCoinsToCopper = (coins: Coins): number => {
    return transformPlatinumToCopper(coins.platinum) +
        transformGoldToCopper(coins.gold) +
        transformElectrumToCopper(coins.electrum) +
        transformSilverToCopper(coins.silver) +
        coins.copper;
};

export const transformCopperToCoins = (copper: number): Coins => {
    let remainingCopper = copper;
    let platinum : number = 0;
    let gold : number = 0;
    let electrum : number = 0;
    let silver : number = 0;

    if (remainingCopper >= 1000) {
        platinum = Math.floor(remainingCopper / 1000);
        remainingCopper = remainingCopper % 1000;
        console.log("Copper: " + remainingCopper);
    }

    if (remainingCopper >= 100) {
        gold = Math.floor(remainingCopper / 100);
        remainingCopper = remainingCopper % 100;
        console.log("Copper: " + remainingCopper);
    }

    if (remainingCopper >= 50) {
        electrum = Math.floor(remainingCopper / 50);
        remainingCopper = remainingCopper % 50;
        console.log("Copper: " + remainingCopper);
    }

    if (remainingCopper >= 10) {
        silver = Math.floor(remainingCopper / 10);
        remainingCopper = remainingCopper % 10;
        console.log("Copper: " + remainingCopper);
    }

    return new Coins(platinum,gold,electrum,silver,remainingCopper);
};