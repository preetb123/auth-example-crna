import React, { PropTypes } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#95a5a6',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10
  },
  otpInput:{
    height: 40,
    backgroundColor: '#95a5a6',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10
  },
  activityIndicator: {
    padding: 8
  }
});

export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOtpRequested: false,
      otpRequestStarted: false,
      loginTitle: 'Request OTP'
    };
  }

  toggleOtpRequestedState(){
    console.log("OTP requested, waiting for use input")
    this.setState({
      isOtpRequested: !this.state.isOtpRequested,
      otpRequestStarted: !this.state.otpRequestStarted,
      loginTitle: 'Submit'
    });
  }

  requestOtp(){
    console.log("requestOtp");
    this.setState({
      otpRequestStarted: !this.state.otpRequestStarted,
      loginTitle: 'Requesting OTP'
    });

    this.waitInterval = setInterval(() => {
      clearInterval(this.waitInterval);
      this.toggleOtpRequestedState();
    }, 1000 * 3);
  }

  submitOtp(){
    console.log("submitOtp");
    if(!this.state.isOtpRequested){
      console.log("otp not requested, requesting otp");
      this.requestOtp();
    }else{
      console.log("navigating to homescreen");
      this.props.navigation.dispatch({ type: 'Login' });
    }
  }

  render(){
    return(
      <KeyboardAvoidingView
        behavior="padding"   
        style={styles.container}>
        <TextInput
          placeholder="Enter your phone number"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
          keyboardType="phone-pad"
          returnKeyType="go"
        />
        { 
          this.state.otpRequestStarted && 
          <ActivityIndicator
            style={styles.activityIndicator}  
          />
        }
        { 
          this.state.isOtpRequested && 
          <TextInput
            placeholder="Enter OTP"
            secureTextEntry
            keyboardType="phone-pad"
            returnKeyType="go"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.otpInput}
          /> 
        }
        
        <Button
          onPress={() => this.submitOtp()}
          title={ this.state.loginTitle }
        />
      </KeyboardAvoidingView>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};