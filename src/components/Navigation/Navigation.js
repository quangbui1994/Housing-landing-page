import React from 'react';
import styles from './Navigation.module.css';
import { ReactComponent as BottomLogo } from '../../assets/img/move.svg';
import { ReactComponent as TopLogo } from '../../assets/img/Arch.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/Search.svg';

const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <div className={styles.logo}>
                <TopLogo className={styles.topLogo}/>
                <BottomLogo className={styles.bottomLogo}/>
            </div>
            <ul className={styles.menu}>
                <li><a href="#">Design Gallery</a></li>
                <li><a href="#">List of Architect</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">How it works</a></li>
            </ul>
            <div className={styles.rightMenu}>
                <input className={styles.searchInput} type="text" placeholder="Search"/>
                <SearchIcon className={styles.searchIcon}/>
                <button>Sign In</button>
                <button className={styles.redButton}>Sign Up</button>
            </div>
        </div>
    );
};

export default Navigation;