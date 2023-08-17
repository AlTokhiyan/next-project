import React, {useEffect, useRef} from "react";
import styles from './styles.module.scss'
import {useInView} from "react-intersection-observer";
import {gsap, Power4} from "gsap";

export const AnimationAxes = ({ transformInitial, style = null, opacity = '0', x = 0, y = 0, classs, children, delay, duration}) => {
    const elementRef = useRef(null);
    const {ref: elementInViewRef, inView: elementInView} = useInView({threshold: 0.2, triggerOnce: true});

    const InitialAxes = {
        x: x,
        y: y,
        opacity: opacity,
    }

    const Option = {
        x: 0,
        y: 0,
        duration: duration || .7,
        opacity: 1,
        ease: Power4.easeOut,
        delay: delay || 0,
    }

    const animateElement = (elementRef) => {
        const element = elementRef.current;
        gsap.set(element, InitialAxes);
        gsap.to(element, Option);
    };


    useEffect(() => {
        if (elementInView) {
            animateElement(elementRef);
        }
    }, [elementInView]);
    return (
        <div
            ref={(el) => {
                elementInViewRef(el);
                elementRef.current = el;
            }}
            className={`animation ${styles[classs]}`}
            style={style}
        >
            {children}
        </div>
    )
}