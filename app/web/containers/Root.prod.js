import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider }  from 'react-redux';
import ReactNativeWebApp from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ReactNativeWebApp />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
