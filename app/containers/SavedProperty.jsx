import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Card from 'components/Card';
import { removeSavedProperty } from 'actions/savedProperty';
import styles from 'containers/SavedProperty.scss';

const cx = classNames.bind(styles);

export default class SavedProperty extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const { dispatch } = this.props;
    dispatch(removeSavedProperty(index));
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
        <h1 className={cx('saved__heading')}>Saved Property</h1>
        {renderedProperties}
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    properties: state.savedProperty
  }
}

export default connect(mapStateToProps)(SavedProperty);