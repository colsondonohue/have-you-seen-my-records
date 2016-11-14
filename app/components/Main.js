import React from 'react';
import ArtistTextContainer from '../containers/ArtistTextContainer';
import styles from './Main.css';

function Main ({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <h1 className={styles.title}>Have You Seen My Records?</h1>
        <ArtistTextContainer />
        {children}
      </div>
    </div>
  );
}

export default Main;
