import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// components
import Header     from '../components/Header';
import Login from '../components/LoginComponent';
// actions
import {
  performLoginAsync,
} from '../../actions/actions';

/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <Login
          onClick={() => dispatch(performLoginAsync())}
          color={color}
          data={data}
        />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
