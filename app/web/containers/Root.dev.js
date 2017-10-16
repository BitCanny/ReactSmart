import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider }             from 'react-redux';
import ReactNativeWebApp from './App';
import DevTools                 from './DevTools';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReactNativeWebApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
