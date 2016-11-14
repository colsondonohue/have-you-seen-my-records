import React, { Component, PropTypes } from 'react';
import { IoMap, IoLockCombination, IoScissors, IoBeer, IoMicB } from 'react-icons/lib/io';
import styles from './Loading.css';

const propTypes = {
  icons: PropTypes.arrayOf(PropTypes.element),
  messages: PropTypes.arrayOf(PropTypes.string),
  waitTime: PropTypes.number
};

const defaultProps = {
  icons: [<IoMap />, <IoLockCombination />, <IoScissors />, <IoBeer />, <IoMicB />],
  messages: ['Searching for user info', 'Cracking the code', 'Trimming loose ends', 'Taking a load off', 'Testing, testing, 1, 2, 1, 2'],
  waitTime: 1400
};

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {current: 0};
    this.interval;
  }

  componentDidMount() {
    const { waitTime } = this.props;
    this.interval = setInterval(() => {
      this.setState({
        current: this.state.current % 4 + 1
      });
    }, waitTime);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { current } = this.state;
    const { icons, messages } = this.props;
    return <h2 className={styles.loading}>{icons[current]} {messages[current]}</h2>;
  }
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
