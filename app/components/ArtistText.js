import React, { PropTypes } from 'react';
import styles from './ArtistText.css';

const propTypes = {
  text: PropTypes.string.isRequired
};

function ArtistText ({ text }) {
  return <h1 className={styles.text}>{text}<span className={styles.cursor}>|</span></h1>;
}

ArtistText.propTypes = propTypes;

export default ArtistText;
