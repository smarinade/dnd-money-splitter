import React, {useState} from 'react';
import styles from "./Button.module.css"

type ButtonProps = {}

function Button(props: ButtonProps) {

    return (
        <button className={styles.Button} type={"submit"}>Divide</button>
    );
}

export default Button;
