import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPropertyData } from 'actions/property';
import LoadingIndicator from 'components/LoadingIndicator';
import Results from 'containers/Results';
import SavedProperty from 'containers/SavedProperty';

import styles from 'containers/PropertyApp.scss';

class PropertyApp extends Component {

  componentDidMount() {
    // make a request to fetch property data
    this.props.dispatch(loadPropertyData());
  }

  render() {
    const { mainUI, results, savedProperty } = this.props;
    console.log(results);
    return (
        <div className={styles['container']}>
          <LoadingIndicator isFetching={mainUI.isFetching} />
          <Results properties={results} />
          <SavedProperty properties={savedProperty} />
        </div>);

  }

}

// Note: Please remove once we have more Container 
// level Components. This is not performant as 
// PropertyApp will rerender after every action.
export default connect(state => state)(PropertyApp);