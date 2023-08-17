import React from 'react';
import Head from "next/head";
import styles from './styles.module.scss'

export const Section = ({children, title, pageName}) => {
    return (
        <>
            <Head>
                <title>SAN DIEGO: Auto Shipping , {title}</title>
            </Head>
            <section className={styles.section}>
                <h1>{pageName} Page</h1>
                {children}
            </section>
        </>
    );
};
