import React from "react";
import styles from './Adventurer.module.css';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

type AdventurerProps = {
    value?: number
}

export function Adventurer({value = 2}: AdventurerProps) {
    return (<label className={styles.Adventurer}>
        <SportsMartialArtsIcon className={styles.icon}></SportsMartialArtsIcon>
        <span className={styles.info}>Adventurers</span>
        <select className={styles.value} name="adventurers">
            {[...Array(9)].map((e, i) => <option key={i+2}>{i+2}</option>)}
        </select>
    </label>);
}