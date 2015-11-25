import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';

export default class Column extends Component {

  render() {
    const { properties } = this.props;

    const renderedProperties = properties.map(property => {
      return (<Card {...property} />);
    })
    return (
      <div>
        {renderedProperties}
      </div>
    );
  }

};

Column.PropTypes = {
  properties: PropTypes.array.isRequired
};
