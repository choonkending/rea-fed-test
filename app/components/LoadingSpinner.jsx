import React, { Component, PropTypes } from 'react';
import styles from 'LoadingSpinner.scss';

import classNames from 'classnames';
const cx = classNames.bind(styles);

export default class LoadingSpinner extends Component {
  render() {
    if (this.props.isFetching) {
      return (<span>Loading . . . </span>);
    }
    return (
      <span></span>
    );
  }
}