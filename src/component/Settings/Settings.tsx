import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import React from "react";
import {getCoinTypeSettings} from "../../service/SettingService";
// import {mapCoinSettings, mapCoinSettingsVO} from "./CoinSettingsMapper";

export type CoinTypeSettingsVO = {
    platinum: string,
    gold: string,
    electrum: string,
    silver: string,
    copper: string
};

export function Settings() {
    const getInitialState = () => getCoinTypeSettings();
    // const [coinTypeSettings, setCoinTypeSettings] = useState<CoinTypeSettingsVO>(getInitialState());

    const handle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form : HTMLFormElement = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // const coinSettings : CoinTypeSettings = mapCoinSettings(formData);
        // const coinSettingsVO : CoinTypeSettingsVO = mapCoinSettingsVO(formData);

        // setCoinTypeSettings(coinSettingsVO);
        // saveCoinTypeSettings(coinSettings);
    };

    return <section>
        <h1>Settings</h1>
        <label id="usedCoinsLabel">Available coins:</label>
        <form onSubmit={handle}>
            <Checkbox name={"platinum"} label={"PP"} checked={true}
                      aria-labelledby="usedCoinsLabel"></Checkbox>
            <Checkbox name={"gold"} label={"GP"} checked={true}
                      aria-labelledby="usedCoinsLabel"></Checkbox>
            <Checkbox name={"electrum"} label={"EP"} checked={true}
                      aria-labelledby="usedCoinsLabel"></Checkbox>
            <Checkbox name={"silver"}  label={"SP"} checked={true}
                      aria-labelledby="usedCoinsLabel"></Checkbox>
            <Checkbox name={"copper"}  label={"CP"} checked={true}
                      aria-labelledby="usedCoinsLabel"></Checkbox>
            <div>
                <Button variant={"Positive"}>Save</Button>
            </div>
        </form>
    </section>;
}
