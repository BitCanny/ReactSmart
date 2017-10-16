import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class LoginComponent extends Component {
  render() {
    const { onPress, color } = this.props;
    var username = "Arnab",password= "123456";
    const style = StyleSheet.create({
      loginForm: {
          backgroundColor: '#e1e1e1',
          margin: 20,
          padding : 20,
          borderRadius : 3,
      }
    });
    return (
      <View
        style={style.loginForm}
      >
        <TextInput
            style={{height: 40, marginBottom:10, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(username) => this.setState({username})}
            value={username===null?"":username}
        />
        <TextInput
            style={{height: 40, marginBottom:10, borderColor: 'gray', borderWidth: 1}}
            secureTextEntry = {true}
            onChangeText={(text) => this.setState({password:text})}
            value={password===null?"":password}
        />
        {/*<TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username===null?"":this.state.username}
        />
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            secureTextEntry = {true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password===null?"":this.state.password}
        />*/}
        <Button title={"Login"} onPress={onPress}/>
      </View>
    );
  }
}

LoginComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
