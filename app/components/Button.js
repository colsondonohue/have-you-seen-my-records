import React from 'react';
import styles from './Button.css';

const propTypes = {
  type: React.PropTypes.string
};

function Button ({ type, children }) {
  if (type) {
    return (
      <button
        className={styles.button}
        type={type}>
        {children}
      </button>
    );
  }
  else {
    return (
      <button className={styles.button}>
        {children}
      </button>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
