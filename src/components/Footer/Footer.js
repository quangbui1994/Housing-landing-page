import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as BottomLogo } from '../../assets/img/move.svg';
import { ReactComponent as TopLogo } from '../../assets/img/Arch.svg';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            <div className={styles.logo}>
                <TopLogo className={styles.topLogo}/>
                <BottomLogo className={styles.bottomLogo}/>
            </div>
        </div>
    );
};

export default Footer;