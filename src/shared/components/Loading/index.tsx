import React from 'react';
import styles from './Loading.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} />
    </div>
  );
};

export default LoadingSpinner;
