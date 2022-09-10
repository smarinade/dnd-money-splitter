import React from 'react';
import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "Positive"
}

function Button({type, variant, onClick, children}: ButtonProps) {

    return (
        <button className={`${styles.Button} ${variant ? styles.ButtonPositive : ''}`} type={type} onClick={onClick}>{children}</button>
    );

}

export default Button;
