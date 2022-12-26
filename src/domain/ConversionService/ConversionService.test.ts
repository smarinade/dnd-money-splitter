import {convertCopperToCoins} from "./ConversionService";
import {CoinPouch} from "../model/CoinPouch";

describe('Conversion Service', () => {

    it('should transform copper to platinum', () => {
        const pouch : CoinPouch = convertCopperToCoins(1000);

        expect(pouch).toStrictEqual(new CoinPouch(1,0,0,0,0));
    });

    it('should transform copper to gold', () => {
        const pouch : CoinPouch = convertCopperToCoins(100);

        expect(pouch).toStrictEqual(new CoinPouch(0,1,0,0,0));
    });

    it('should transform copper to electrum', () => {
        const pouch : CoinPouch = convertCopperToCoins(50);

        expect(pouch).toStrictEqual(new CoinPouch(0,0,1,0,0));
    });

    it('should transform copper to silver', () => {
        const pouch : CoinPouch = convertCopperToCoins(10);

        expect(pouch).toStrictEqual(new CoinPouch(0,0,0,1,0));
    });

    it('should transform a easy pouch of copper', () => {
        const pouch : CoinPouch = convertCopperToCoins(1111);

        expect(pouch).toStrictEqual(new CoinPouch(1,1,0,1,1));
    });

});

export {}