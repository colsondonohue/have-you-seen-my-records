import React, { PropTypes } from 'react';
import styles from './ScoreText.css';

const propTypes = {
  score: PropTypes.number.isRequired
};

function ScoreText({ score }) {
  return <h2 className={styles.score}>{score}% Indie</h2>;
}

ScoreText.PropTypes = propTypes;

export default ScoreText;
