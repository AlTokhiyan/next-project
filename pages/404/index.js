import React from 'react';
import styles from './styles.module.scss'
import {AnimationAxes} from "@/gsap";

export default function Error() {
    return (
        <div className={styles.errorPage}>
            <div className={styles.body}>
                <div className={styles.statusContent}>
                    <AnimationAxes x={-1000}  duration={1}>4</AnimationAxes>
                    <AnimationAxes delay={1}>0</AnimationAxes>
                    <AnimationAxes x={1000} duration={1}>4</AnimationAxes>
                </div>
                <div className={styles.message}>
                    <div className={styles.content}>
                        <AnimationAxes y={1000} delay={.1}>P</AnimationAxes>
                        <AnimationAxes y={1000} delay={.2}>a</AnimationAxes>
                        <AnimationAxes y={1000} delay={.3}>g</AnimationAxes>
                        <AnimationAxes y={1000} delay={.4}>e</AnimationAxes>
                    </div>

                    <div className={styles.content}>
                        <AnimationAxes y={1000} delay={.5}>D</AnimationAxes>
                        <AnimationAxes y={1000} delay={.6}>o</AnimationAxes>
                        <AnimationAxes y={1000} delay={.7}>n</AnimationAxes>
                        <AnimationAxes y={1000} delay={.8}>'</AnimationAxes>
                        <AnimationAxes y={1000} delay={.9}>t</AnimationAxes>
                    </div>

                    <div className={styles.content}>
                        <AnimationAxes y={1000} delay={1}>F</AnimationAxes>
                        <AnimationAxes y={1000} delay={1.1}>o</AnimationAxes>
                        <AnimationAxes y={1000} delay={1.2}>u</AnimationAxes>
                        <AnimationAxes y={1000} delay={1.3}>d</AnimationAxes>
                    </div>
                </div>
            </div>

        </div>
    );
};