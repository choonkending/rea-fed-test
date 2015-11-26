import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import styles from 'components/Column.scss';

export default class Column extends Component {

  render() {
    const { properties, heading } = this.props;

    const renderedProperties = properties.map(property => {
      return (<Card {...property} />);
    })
    return (
      <div>
        <h1 className={styles['column__heading']}>{heading}</h1>
        {renderedProperties}
      </div>
    );
  }

};

Column.PropTypes = {
  properties: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired
};
