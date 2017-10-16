import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export default class LoginComponent extends Component {
  render() {
    const { onClick, color,username,password,data } = this.props;
    return (
        <div className="loginForm" style={{color: color}}>
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Login"
                    />
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={onClick}/>
                </div>
            </MuiThemeProvider>
        </div>
    );
  }
};
const style = {
    margin: 15,
};

LoginComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
