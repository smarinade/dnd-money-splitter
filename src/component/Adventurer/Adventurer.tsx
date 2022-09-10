import React from "react";
import styles from './Adventurer.module.css';

type AdventurerProps = {
    value?: number
}

export function Adventurer({value = 2}: AdventurerProps) {
    return (<label className={styles.Adventurer}>
        <span className={styles.icon}>P</span>
        <span className={styles.info}>Adventurers</span>
        <input className={styles.value} name="adventurers" type="number" defaultValue={value} min={0}/>
    </label>);
}