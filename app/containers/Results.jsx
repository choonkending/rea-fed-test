import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Card from 'components/Card';
import { addProperty } from 'actions/results';

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const { dispatch, properties } = this.props;

    dispatch(addProperty(properties[index]));
  }

  render() {
    const { properties } = this.props;
    const buttonText = "Add Property";

    // Map properties to Card component
    // Also pass handleClick function as a prop
    const renderedProperties = properties.map((property, index) => {
      return (<Card key={index} index={index} {...property} 
        handleClick={this.handleClick}
        buttonText={buttonText} />);
    });
    return (
      <div>
        <h1>Results</h1>
        {renderedProperties}
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    properties: state.results
  }
}

export default connect(mapStateToProps)(Results);
