import React, {useState} from 'react';
import {Coins} from "../../service/Coins";
import {divide} from "../../service/CoinService";
import Coin from "../Coin/Coin";
import styles from "./CoinForm.module.css"
import Button from "../Button/Button";
import {Adventurer} from "../Adventurer/Adventurer";

type CoinFormProps = {}

function CoinForm(props: CoinFormProps) {
    const [coins, setCoins] = useState<Coins[]>([]);

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

        const dividedCoins: Coins[] = divide(coins, Number(data.get('adventurers')));
        setCoins(dividedCoins)
    };

    const handleReset = () => {
        setCoins([]);
    };

    return (
        <form className={styles.CoinForm} onSubmit={handleDivide} onReset={handleReset}>
            <Coin label={"Platinum (PP)"} name={"platinum"}></Coin>
            <Coin label={"Gold (GP)"} name={"gold"} value={10}></Coin>
            <Coin label={"Electrum (EP)"} name={"electrum"}></Coin>
            <Coin label={"Silver (SP)"} name={"silver"}></Coin>
            <Coin label={"Copper (CP)"} name={"copper"}></Coin>

            <Adventurer></Adventurer>

            <div className={styles.actions}>
                <Button variant={"Positive"} type={"submit"}>
                    Divide
                </Button>
                <Button type={"reset"}>
                    Reset
                </Button>
            </div>

            <output>
                {coins.map((coin, index) => {
                    return (
                        <div className={styles.Result}>
                            <div className={styles.title}>Adventurer #{index + 1} receives:</div>
                            <span>PP: {coin.platinum},</span>
                            <span>GP: {coin.gold},</span>
                            <span>EP: {coin.electrum},</span>
                            <span>SP: {coin.silver},</span>
                            <span>CP: {coin.copper}</span>
                        </div>
                    );
                })}
            </output>
        </form>
    );
}

export default CoinForm;
