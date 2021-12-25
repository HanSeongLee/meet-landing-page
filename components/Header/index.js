import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <Link href={'/'}>
                <a>
                    <img src={'/img/logo.svg'}
                         alt={'meet'}
                    />
                </a>
            </Link>
        </header>
    );
};

export default Header;
