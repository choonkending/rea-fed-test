import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Card from 'components/Card';
import { removesavedProperties } from 'actions/savedProperties';
import styles from 'containers/SavedProperties.scss';

const cx = classNames.bind(styles);

export default class SavedProperties extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const { dispatch } = this.props;
    dispatch(removesavedProperties(index));
  }

  render() {
    const { properties } = this.props;
    const buttonText = "Remove Property";

    // Map properties to Card component
    // Also pass handleClick function as a prop
    const renderedProperties = properties.map((property, index) => {
      return (<Card key={index} index={index} {...property} 
        handleClick={this.handleClick}
        buttonText={buttonText} />);
    });
    return (
      <div className={cx('saved__column')}>
        <h1 className={cx('saved__heading')}>Saved Properties</h1>
        <small className={cx('saved__helper', {
          'saved__helper--hidden': properties.length > 0
        })}>Select Add Property in your Results</small>
        {renderedProperties}
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    properties: state.savedProperties
  }
}

export default connect(mapStateToProps)(savedProperties);