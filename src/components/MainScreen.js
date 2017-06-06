import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer:{
    marginBottom: 30
  },
  logo:{
    width: 100,
    height: 46
  }
});

// change to stateful component
const MainScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image 
        style={styles.logo}
        source={require('../images/logo-dark.png')}/>
    </View>

    <LoginStatusMessage />
    <AuthButton />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;