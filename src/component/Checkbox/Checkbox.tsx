import React from 'react';
import styles from "./Checkbox.module.css"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

function Checkbox({label, name, value, type, onClick, children, checked}: CheckboxProps) {

    return (
        <label className={`${styles.switch}`}>
            <input type="checkbox" name={name} value={value} defaultChecked={checked} />
            <span>{label}</span>
        </label>
    );

}

export default Checkbox;
