import React from 'react';
import Button from './Button';
import styles from './Home.css';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired
};

function Home ({ onChange, onClick, username }) {
  return (
    <div>
      <h2 className={styles.intro}>Learn how credible you are from Pitchfork, the fount of indie knowledge</h2>
      <form onSubmit={onClick}>
        <input
          placeholder="Last.fm Username"
          value={username}
          type="text"
          className={styles.input}
          onChange={onChange}
        />
        <Button type="submit">How Indie Am I?</Button>
      </form>
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
