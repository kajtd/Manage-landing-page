import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, nav, secondary }) => {
    let className = "";
    if (nav) className = "nav-button";
    else if (secondary) className = "secondary"; 
    return(
        <button className={nav || secondary ? `${styles.button} ${styles[`${className}`]}` : styles.button}>{children}</button>
    );
};

export default Button;