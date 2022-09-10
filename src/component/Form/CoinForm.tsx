import React, {useState} from 'react';
import {Coins} from "../../service/Coins";
import {divide} from "../../service/CoinService";
import Coin from "../Coin";

type FormProps = {}

function Form(props: FormProps) {
    const [output, setOutput] = useState("");

    const handleDivide = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const coins : Coins = {
            platinum: Number(data.get('platinum')),
            gold: Number(data.get('gold')),
            electrum: Number(data.get('electrum')),
            silver: Number(data.get('silver')),
            copper: Number(data.get('copper')),
        };

        const dividedCoins : Coins[] = divide(coins, Number(data.get('adventurers')));

        setOutput(dividedCoins.map(coins => JSON.stringify(coins)).join(','));
    };

    return (
        <form onSubmit={handleDivide}>
            <Coin label={"Platinum"} name={"platinum"}></Coin>
            <Coin label={"Gold"} name={"gold"}></Coin>
            <Coin label={"Electrum"} name={"electrum"}></Coin>
            <Coin label={"Silver"} name={"silver"}></Coin>
            <Coin label={"Copper"} name={"copper"}></Coin>

            <label>
                Adventurers
                <input name="adventurers" type="number" defaultValue={0} min={0}/>
            </label>

            <div>
                <button type={"submit"}>Divide</button>
            </div>

            <div>
                {output}
            </div>
        </form>
    );
}

export default Form;
