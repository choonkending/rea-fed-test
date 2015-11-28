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
    const { mainUI } = this.props;
    return (
        <div className={styles['container']}>
          <LoadingIndicator isFetching={mainUI.isFetching} />
          <Results />
          <SavedProperty />
        </div>);

  }

}

function mapStateToProps(state) {
  return {
    mainUI: state.mainUI
  };
}

export default connect(mapStateToProps)(PropertyApp);
