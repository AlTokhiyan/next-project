import React from 'react';
import styles from './styles.module.scss'
import {ArrowLeft} from "@/public/images/icons";
import {useRouter} from "next/router";

export const GoBack = () => {
    const {back} = useRouter() // destructuring

    const goBackHandler = () => {
        back()
    }

    return (
        <button onClick={goBackHandler} className={styles.goBack}>
            <ArrowLeft/>
            Go Back
        </button>
    );
};