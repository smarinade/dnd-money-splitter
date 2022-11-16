import {divide, DividedCoins} from "./CoinService";
import {Coins} from "./Coins";

describe('Coin Service', () => {

    describe('should divide all coins equally between 2 players', () => {

        it('without rest', () => {
            const coins : DividedCoins = divide(new Coins(2, 2, 2, 2, 2), 2);

            const pouch1 = new Coins(1, 1, 1, 1, 1);
            const pouch2 = new Coins(1, 1, 1, 1, 1);

            expect(coins).toStrictEqual({dividedCoins: [pouch1, pouch2]});
        });

        it('with rest', () => {
            const coins : DividedCoins = divide(new Coins(1, 1, 0, 1, 1), 2);

            const pouch1 = new Coins(0, 5, 1, 0, 5);
            const pouch2 = new Coins(0, 5, 1, 0, 5);
            const remainingCoins = new Coins(0, 0, 0, 0, 1);

            expect(coins).toStrictEqual({dividedCoins: [pouch1, pouch2], remainingCoins: remainingCoins});
        });
    });

});

export {}