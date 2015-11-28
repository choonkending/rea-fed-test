import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Card from 'components/Card';
import { addProperty } from 'actions/results';
import styles from 'containers/Results.scss';

const cx = classNames.bind(styles);

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
      <div className={cx('results__column')}>
        <h1 className={cx('results__heading')}>Results</h1>
        <small className={cx('results__helper', {
          'results__helper--hidden': properties.length > 0
        })}>Select Add Property in your results</small>
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
