import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPropertyData } from 'actions/property';
import LoadingIndicator from 'components/LoadingIndicator';
import Column from 'components/Column';

class PropertyApp extends Component {

  componentDidMount() {
    // make a request to fetch property data
    this.props.dispatch(loadPropertyData());
  }

  render() {
    const { isFetching, results, savedProperty } = this.props;
    return (
        <div>
          <h1>Property App</h1>
          <LoadingIndicator isFetching={isFetching} />
          <Column properties={results} />
          <Column properties={savedProperty} />
        </div>);

  }

}

// Note: Please remove once we have more Container 
// level Components. This is not performant as 
// PropertyApp will rerender after every action.
export default connect(state => state.propertyApp)(PropertyApp);