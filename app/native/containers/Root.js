import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ReactNativeApp from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ReactNativeApp />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
