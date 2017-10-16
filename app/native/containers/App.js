import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View,Text,ActivityIndicator } from 'react-native';
import { connect }  from 'react-redux';
import { appStyle } from '../styles/styles';
// dumb components
import Header     from '../components/Header';
import LoginComponent from '../components/LoginComponent';
// actions
import {
    performLoginAsync,
} from '../../actions/actions';

/** The app entry point */
class ReactNativeApp extends Component {
  render() {
    // injected by connect call
    const {dispatch, color, data} = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <LoginComponent
          onPress={() => dispatch(performLoginAsync("77da73af49a4a2dbb496a1ac2f5a9043c392dc2b1de54455d446ffcbb7f41753","1d195f0e870065fdd87bc2d639871b8fb2ba41918f3ba4415b1c3f9e6a11239d","123456","9874614021"))}
          color={color}
        />
          {
              data.loading?<ActivityIndicator size = {'large'}/>:data.objects.token!==undefined?<Text>Login Successful {'\n'}{data.objects.token}</Text>:null
          }
      </View>
    );
  }
}

ReactNativeApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeApp);
