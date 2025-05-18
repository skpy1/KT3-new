import React from 'react';
import styles from './Rating.module.css';

const Rating = ({ value }) => {
    const rounded = Math.round(value);
    const stars = Array(5).fill(0).map((_, i) => i < rounded);
    return (
        <div className={styles.rating}>
            {stars.map((filled, idx) => (
                <span key={idx} className={filled ? styles.filled : styles.empty}>★</span>
            ))}
        </div>
    );
};

export default Rating;