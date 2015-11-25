import React, { Component, PropTypes } from 'react';

export default class LoadingIndicator extends Component {
  render() {
    if (this.props.isFetching) {
      return (<span>Loading ...</span>);
    }
    return null;
  }
}

LoadingIndicator.propTypes = {
  isFetching: PropTypes.bool.isRequired
};