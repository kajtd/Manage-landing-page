import React, { useState, useEffect } from 'react';
import styles from './Opinions.module.scss';
import { opinions } from '../../data/opinions'
import Button from './../Button/Button';
import Carousel from 'react-elastic-carousel';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  
  export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
}

const Opinions = () => {
    const width  = useWindowDimensions();
    let itemsToShow = 3;
    width < 914 ? itemsToShow = 1 : itemsToShow = 3;


    return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>What they’ve said</h2>
                <ul className={styles.menu}>
                    <Carousel 
                        itemsToShow={itemsToShow} 
                        pagination={false} 
                        easing="cubic-bezier(1,.15,.55,1.54)"
                        transitionMs={2000}
                    >
                        { opinions.map( item => (
                            <li className={styles.opinion} key={item.name}>
                                <img src={item.image} className={styles.opinionImage} alt=""/>
                                <h3 className={styles.opinionTitle}>{item.name}</h3>
                                <p className={styles.opinionDescription}>{item.opinion}</p>
                            </li>
                        )) }
                    </Carousel>
                </ul>
                <Button>Get Started</Button>
            </div>
    );
};

export default Opinions;