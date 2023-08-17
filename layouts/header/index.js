import React from 'react';
import Link from "next/link";

import styles from './styles.module.scss'


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContent}>
                Logo
            </div>
            <div className={styles.menu}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/users" className={styles.link}>Users</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <Link href="/blogs" className={styles.link}>Blogs</Link>
                <Link href="/about" className={styles.link}>About Us</Link>
            </div>
        </header>
    );
};