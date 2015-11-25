import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingIndicator from 'components/LoadingIndicator';
import { loadPropertyData } from 'actions/property';

class PropertyApp extends Component {

  componentDidMount() {
    // make a request to fetch property data
    this.props.dispatch(loadPropertyData());
  }

  render() {
    const { isFetching, results, savedProperty } = this.props;
    const renderedResults = results.map(property => {
      return (<div>
        <div>ID {property.id}</div>
        <div>{property.price}</div>
        <img src={property.mainImage} />
      </div>);
    });
    const renderedSavedProperty = savedProperty.map(property => {
      return (<div>
        <div>ID {property.id}</div>
        <div>{property.price}</div>
        <img src={property.mainImage} />
      </div>);
    });
    return (
        <div>
          <h1>Property App</h1>
          <LoadingIndicator isFetching={isFetching} />
          <div>{renderedResults}</div>
          <div>{renderedSavedProperty}</div>
        </div>);

  }

}

// Note: Please remove once we have more Container 
// level Components. This is not performant as 
// PropertyApp will rerender after every action.
export default connect(state => state.propertyApp)(PropertyApp);