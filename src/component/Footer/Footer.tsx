import React from 'react';
import styles from "./Footer.module.css"

interface FooterProps {

}

function Footer({}: FooterProps) {

    return (
        <footer className={styles.footer}>
            <div className={styles.copywright}>©2022 SuperMarinade | All Rights Reserved</div>
        </footer>
    );

}

export default Footer;
