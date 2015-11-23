import 'babel-core/polyfill'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import PropertyApp from 'containers/PropertyApp';

const store = configureStore();

export default class Root extends Component {

  render() {
    return (
        <Provider store={store}>
          <PropertyApp />
        </Provider>);
  }

}