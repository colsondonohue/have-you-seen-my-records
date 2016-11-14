import React, { Component, PropTypes } from 'react';
import ArtistText from '../components/ArtistText';

 const propTypes = {
  artists: PropTypes.arrayOf(PropTypes.string),
  typeTime: PropTypes.number,
  waitTime: PropTypes.number
};

const defaultProps = {
  artists: ['This Heat', 'Outsiders', 'Nation of Ulysses', 'Mars',
  'The Trojans', 'The Black Dice', 'Todd Terry', 'The Germs', 'Section 25',
  'Althea and Donna', 'a-ha', 'Pere Ubu', 'Dorothy Ashby',
  'PIL', 'Fania All-Stars', 'The Bar-Kays', 'The Human League', 'The Normal',
  'Lou Reed', 'Scott Walker', 'Monks', 'Niagra', 'Joy Division', 'Lower 48',
  'The Association', 'Sun Ra', 'Scientists', 'Royal Trux', '10cc', 'Eric B. and Rakim',
  'Index', 'Basic Channel', 'Soulsonic Force', 'Juan Atkins', 'David Axelrod',
  'Electric Prunes', 'Gil Scott Heron', 'The Slits', 'Faust', 'Mantronix', 'Swans',
  'The Soft Cell', 'The Sonics', 'Manuel Gottsching'],
  typeTime: 90,
  waitTime: 1200
};

class ArtistTextContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentArtist: props.artists[0], textShown: '', direction: 1};
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const { typeTime } = this.props;
    setInterval(this.animate, typeTime);
  }

  animate() {
    const { currentArtist, textShown, direction } = this.state;
    const { artists, waitTime } = this.props;

    if (direction == 1) {
      // type artist
      if (currentArtist != textShown) {
        this.setState({
          textShown: currentArtist.substr(0, textShown.length + 1)
        });
      }
      else {
        // pause before erasing word
        setTimeout(() => this.setState({
          direction: 0
        }), waitTime);
      }
    }

    else {
      // erase artist
      if (textShown != '') {
        this.setState({
          textShown: currentArtist.substr(0, textShown.length - 1)
        });
      }
      else {
        this.setState({
          currentArtist: artists[Math.floor(artists.length * Math.random())]
        });
        // pause before typing new word
        setTimeout(() => this.setState({
          direction: 1
        }), waitTime);
      }
    }
  }

  render() {
    return <ArtistText text={this.state.textShown} />;
  }
}

ArtistTextContainer.propTypes = propTypes;
ArtistTextContainer.defaultProps = defaultProps;

export default ArtistTextContainer;
