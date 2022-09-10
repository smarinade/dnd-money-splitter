import {Coins} from "./Coins";
import {convertCopperToCoins} from "./ConversionService";

describe('Conversion Service', () => {

    it('should transform copper to platinum', () => {
        const pouch : Coins = convertCopperToCoins(1000);

        expect(pouch).toStrictEqual(new Coins(1,0,0,0,0));
    });

    it('should transform copper to gold', () => {
        const pouch : Coins = convertCopperToCoins(100);

        expect(pouch).toStrictEqual(new Coins(0,1,0,0,0));
    });

    it('should transform copper to electrum', () => {
        const pouch : Coins = convertCopperToCoins(50);

        expect(pouch).toStrictEqual(new Coins(0,0,1,0,0));
    });

    it('should transform copper to silver', () => {
        const pouch : Coins = convertCopperToCoins(10);

        expect(pouch).toStrictEqual(new Coins(0,0,0,1,0));
    });

    it('should transform a easy pouch of copper', () => {
        const pouch : Coins = convertCopperToCoins(1111);

        expect(pouch).toStrictEqual(new Coins(1,1,0,1,1));
    });

});

export {}