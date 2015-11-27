import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import Card from 'components/Card';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    const { properties } = this.props;
    const buttonText = "Remove Property";

    // Map properties to Card component
    // Also pass handleClick function as a prop
    const renderedProperties = properties.map(property => {
      return (<Card key={property.id} {...property} 
        handleClick={this.handleClick}
        buttonText={buttonText} />);
    })
    return (
      <div>
        <h1>Saved Property</h1>
        {renderedProperties}
      </div>
    );
  }

};

Results.PropTypes = {
  properties: PropTypes.array.isRequired
};
