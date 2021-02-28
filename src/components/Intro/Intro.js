import React from 'react';
import styles from './Intro.module.scss';
import Button from './../Button/Button';

const Intro = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1 className={styles.title}>Bring everyone together to build better products.</h1>
                <p className={styles.description}>
                    Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.
                </p>
                <Button>Get Started</Button>
            </div>
            <div className={styles.introImg}></div>
        </div>
    );
};

export default Intro;