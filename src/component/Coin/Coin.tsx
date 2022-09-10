import React from 'react';
import styles from './Coin.module.css';
import {CoinIcon} from "./Icon/CoinIcon";

type CoinProps = {
    label: string,
    name: 'platinum' | 'gold' | 'electrum' | 'silver' | 'copper'
    value?: number
}

function Coin({label, name, value = 0}: CoinProps) {
    return (
        <label className={styles.Coin}>
            <CoinIcon type={name}></CoinIcon>
            <span className={styles.info}>{label}</span>
            <input className={styles.value} name={name} type="number" defaultValue={value} min={0}/>
        </label>
    );
}

export default Coin;
