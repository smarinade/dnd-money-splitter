import React, {useState} from 'react';
import {Coins} from "../../service/Coins";
import {divide, DividedCoins} from "../../service/CoinService";
import Coin from "../Coin/Coin";
import styles from "./CoinForm.module.css"
import Button from "../Button/Button";
import {Adventurer} from "../Adventurer/Adventurer";

type CoinFormProps = {}

const getClipboardText = (dividedCoins: DividedCoins) => 'PP: ' + dividedCoins.dividedCoins[0].platinum + ',' +
    'GP: ' + dividedCoins.dividedCoins[0].gold + ',' +
    'SP: ' + dividedCoins.dividedCoins[0].silver + ',' +
    'EP: ' + dividedCoins.dividedCoins[0].electrum + ',' +
    'CP: ' + dividedCoins.dividedCoins[0].copper
;

const copyHandler = (dividedCoins: DividedCoins) => {
    const data: string = getClipboardText(dividedCoins);
    navigator.clipboard.writeText(data).then(() => {
        alert("Copied to clipboard");
    });
};

function CoinForm(props: CoinFormProps) {
    const [dividedCoins, setDividedCoins] = useState<DividedCoins | undefined>();

    const handleDivide = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const coins: Coins = {
            platinum: Number(data.get('platinum')),
            gold: Number(data.get('gold')),
            electrum: Number(data.get('electrum')),
            silver: Number(data.get('silver')),
            copper: Number(data.get('copper')),
        };

        const qwerty: DividedCoins = divide(coins, Number(data.get('adventurers')));
        setDividedCoins(qwerty)
    };

    const handleReset = () => {
        setDividedCoins(undefined);
    };

    const outputDividedCoins = dividedCoins?.dividedCoins[0];
    const outputRemainingCoins = dividedCoins?.remainingCoins;

    return (
        <>
            <form className={styles.CoinForm} onSubmit={handleDivide} onReset={handleReset}>
                <Coin label={"Platinum (PP)"} description={"1 pp = 10 gp"} name={"platinum"}></Coin>
                <Coin label={"Gold (GP)"} name={"gold"}></Coin>
                <Coin label={"Electrum (EP)"} description={"1 gp = 2 ep"} name={"electrum"}></Coin>
                <Coin label={"Silver (SP)"} description={"1 gp = 10 sp"} name={"silver"}></Coin>
                <Coin label={"Copper (CP)"} description={"1 gp = 100 cp"} name={"copper"}></Coin>

                <Adventurer></Adventurer>

                <div className={styles.actions}>
                    <Button variant={"Positive"} type={"submit"}>
                        Divide
                    </Button>
                    <Button type={"reset"}>
                        Reset
                    </Button>
                </div>
            </form>

            <output id={"output"} className={styles.output}>
                {outputDividedCoins && <div className={styles.Result}>
                    <h2 className={styles.subtitle}>Every adventurer gets:</h2>
                    <span className={styles.text}>
                        PP: {outputDividedCoins?.platinum},
                        GP: {outputDividedCoins?.gold},
                        EP: {outputDividedCoins?.electrum},
                        SP: {outputDividedCoins?.silver},
                        CP: {outputDividedCoins?.copper}
                    </span>
                </div>
                }
                {outputRemainingCoins && <div className={styles.Result}>
                    <h2 className={styles.subtitle}>Remainder:</h2>
                    <span className={styles.text}>
                        PP: {outputRemainingCoins?.platinum},
                        GP: {outputRemainingCoins?.gold},
                        EP: {outputRemainingCoins?.electrum},
                        SP: {outputRemainingCoins?.silver},
                        CP: {outputRemainingCoins?.copper}
                    </span>
                </div>
                }
            </output>

            {outputDividedCoins &&
                <div className={styles.outputAction}>
                    <Button onClick={() => copyHandler(dividedCoins)}>
                        Copy to clipboard
                    </Button>
                </div>
            }
        </>
    );
}

export default CoinForm;
