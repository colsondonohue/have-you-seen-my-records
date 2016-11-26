import React, { Component, PropTypes } from 'react';
import Home from '../components/Home';
import validate from '../utils/validate';

const contextTypes = {
  router: PropTypes.object.isRequired
};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', placeholder: 'Last.fm Username'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    validate(this.state.username)
      .then((valid) => {
        if (!valid) {
          this.setState({
            username: '',
            placeholder: 'Enter a valid username'
          });
        }
        else {
          this.context.router.push({
            pathname: '/results',
            query: {
              username: this.state.username
            }
          })
        }
      });
  }

  render() {
    return (
      <Home
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        username={this.state.username}
        placeholder={this.state.placeholder}>
      </Home>
    );
  }
}

HomeContainer.contextTypes = contextTypes;

export default HomeContainer;
