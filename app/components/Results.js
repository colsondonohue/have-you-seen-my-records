import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import ScoreText from './ScoreText';
import Loading from './Loading';
import Button from './Button';
import styles from './Results.css';

const propTypes = {
  score: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message1: PropTypes.string.isRequired,
  message2: PropTypes.string.isRequired
}

function Results({ message1, score, isLoading, message2 }) {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.results}>
      <h2 className={styles.text}>{message1}</h2>
      <ScoreText score={score} />
      <h2 className={styles.text}>{message2}</h2>
      <Link to='/'>
        <Button>Try Another Username</Button>
      </Link>
    </div>
  );
}

Results.propTypes = propTypes;

export default Results;
