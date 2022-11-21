import React from 'react';
import styles from './Coin.module.css';
import {CoinIcon} from "./Icon/CoinIcon";

type CoinProps = {
    label: string,
    description?: string,
    name: 'platinum' | 'gold' | 'electrum' | 'silver' | 'copper'
    value?: number
}

function Coin({label, description, name, value = 0}: CoinProps) {
    return (
        <label className={styles.Coin}>
            <CoinIcon type={name}></CoinIcon>
            <div className={styles.label}>
                <span className={styles.info}>{label}</span>
                <span className={styles.description}>{description}</span>
            </div>
            <input className={styles.value} name={name} type="number" inputMode="decimal" defaultValue={value} min={0}/>
        </label>
    );
}

export default Coin;
