import React, { Component, PropTypes } from 'react';
import Home from '../components/Home';

const contextTypes = {
  router: PropTypes.object.isRequired
};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit(event) {
    this.context.router.push({
      pathname: '/results',
      query: {
        username: this.state.username
      }
    })
  }

  render() {
    return (
      <Home
        onChange={this.handleChange}
        onClick={this.handleSubmit}
        username={this.state.username}>
      </Home>
    );
  }
}

HomeContainer.contextTypes = contextTypes;

export default HomeContainer;
