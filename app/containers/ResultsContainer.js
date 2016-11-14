import React, { Component } from 'react';
import Results from '../components/Results';
import getScore from '../utils/scoreCalc';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      isLoading: true,
      message1: '',
      message2: ''
    };
  }

  componentDidMount() {
    const username = this.props.location.query.username;
    getScore(username)
      .then((finalScore) => {
        if (finalScore >= 75) {
          this.setState({
            isLoading: false,
            score: finalScore,
            message1: 'Congrats! You\'re',
            message2: 'James Murphy would be proud'
          })
        }
        else if (finalScore >= 50) {
          this.setState({
            isLoading: false,
            score: finalScore,
            message1: 'Not bad. You\'re',
            message2: 'At least you aren\'t a One Direction fan'
          })
        }
        else {
          this.setState({
            isLoading: false,
            score: finalScore,
            message1: 'Yikes! You\'re',
            message2: 'Consider straying from the Top 40'
          })
        }
      });
  }

  render() {
    return (
      <Results
        score={this.state.score}
        isLoading={this.state.isLoading}
        message1={this.state.message1}
        message2={this.state.message2}
      />
    );
  }
}

export default ResultsContainer;
