import React from 'react';
import styles from './WhatsDifferent.module.scss';
import { differences } from '../../data/differences'

const WhatsDifferent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2 className={styles.title}>What’s different about Manage?</h2>
                <p className={styles.description}>
                    Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. 
                </p>
            </div>
            <ul className={styles.menu}>
                {differences.map(item => (
                    <li className={styles.difference} key={item.number}>
                        <span className={styles.differenceNumber}>{item.number}</span>
                        <h3 className={styles.differenceTitle}>{item.title}</h3>
                        <p className={styles.differenceDescription}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WhatsDifferent;