import React from 'react';
import styles from './GetStarted.module.scss';
import Button from './../Button/Button';

const GetStarted = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Simplify how your team works today.</h2>
            <Button secondary>Get Started</Button>
        </div>
    );
};

export default GetStarted;