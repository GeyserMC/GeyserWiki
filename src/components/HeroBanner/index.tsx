import React from 'react';
import styles from './styles.module.css';

const HeroBanner = ({ title, subheading, backgroundImage }) => {
    return (
        <div
            className={styles.heroBanner}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.textSection}>
                <h1>{title}</h1>
                <p>{subheading}</p>
            </div>
        </div>
    );
};

export default HeroBanner;