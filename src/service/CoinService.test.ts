import {divide} from "./CoinService";
import {Coins} from "./Coins";

describe('Coin Service', () => {

    it('should divide all coins equally between 2 players', () => {
        const coins: Coins[] = divide(new Coins(1, 1, 0, 1, 1), 2);

        const pouch1 = new Coins(0, 5, 1, 0, 5);
        const pouch2 = new Coins(0, 5, 1, 0, 5);
        const remaining = new Coins(0, 0, 0, 0, 1);

        expect(coins).toStrictEqual([pouch1, pouch2, remaining]);
    });

});

export {}