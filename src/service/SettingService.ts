export interface CoinTypeSettings {
    platinum: boolean,
    gold: boolean,
    electrum: boolean,
    silver: boolean,
    copper: boolean
}

export const getCoinTypeSettings = (): CoinTypeSettings => {
    return {copper: false, electrum: false, gold: false, platinum: false, silver: false};
};

export const saveCoinTypeSettings = (coins: CoinTypeSettings) => {
    window.localStorage.setItem('supports-coin-types', JSON.stringify(coins));
};
