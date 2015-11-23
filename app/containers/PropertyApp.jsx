import React, { Component } from 'react';
import { connect } from 'react-redux';

class PropertyApp extends Component {

  render() {

    return (
        <div>
          <h1>Property App</h1>
        </div>);

  }

}

// Note: Please remove once we have more Container 
// level Components. This is not performant as 
// PropertyApp will rerender after every action.
export default connect(state => state)(PropertyApp);