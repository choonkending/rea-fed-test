import React, { Component, PropTypes } from 'react';
import styles from 'components/LoadingIndicator.scss';

export default class LoadingIndicator extends Component {
  render() {
    if (this.props.isFetching) {
      return (<span className={styles.loader}></span>);
    }
    return null;
  }
}

LoadingIndicator.propTypes = {
  isFetching: PropTypes.bool.isRequired
};
