import React from 'react';
import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "Positive"
}

function Button({type, variant, children}: ButtonProps) {

    return (
        <button className={`${styles.Button} ${variant ? styles.ButtonPositive : ''}`} type={type}>{children}</button>
    );

}

export default Button;
