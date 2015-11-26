import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPropertyData } from 'actions/property';
import LoadingIndicator from 'components/LoadingIndicator';
import Column from 'components/Column';

import styles from 'containers/PropertyApp.scss';

class PropertyApp extends Component {

  componentDidMount() {
    // make a request to fetch property data
    this.props.dispatch(loadPropertyData());
  }

  render() {
    const { isFetching, results, savedProperty } = this.props;
    return (
        <div className={styles['container']}>
          <LoadingIndicator isFetching={isFetching} />
          <Column heading="Results" properties={results} />
          <Column heading="Saved Properties" properties={savedProperty} />
        </div>);

  }

}

// Note: Please remove once we have more Container 
// level Components. This is not performant as 
// PropertyApp will rerender after every action.
export default connect(state => state.propertyApp)(PropertyApp);