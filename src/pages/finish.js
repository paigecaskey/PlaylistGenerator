import React from 'react';
import styles from './finish.module.css';
import Link from 'next/link';

const FinishPage = () => {
  return (
    <div className={styles['button-container']}>
      <h1 className={styles['header']}>Playlist made!</h1>
      <Link href="/" className={styles['button']}>
        <button className={styles['button']}>Back to Home</button>
        </Link>
    </div>
  );
};

export default FinishPage;
