import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button, Input, GoogleButton, HrLine} from './components';

// You can test your code with "npm test" (or "yarn test" if you using yarn)

function Login() {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.viewStyle}>
          <Image
            source={require('./components/assets/headphones.png')}
            style={styles.imageStyle}
          />
          <Input
            keyboardType="email-address"
            inputIcon="envelope"
            placeholder="Email"
            onText={(value) => console.log(value)}
          />
          <Input
            keyboardType="visible-password"
            inputIcon="lock"
            placeholder="Password"
            onText={(value) => console.log(value)}
          />
          <Button
            title="LOGIN"
            variant="buttonContainer"
            variantTitle="textStyle"
            onClick={() => console.log('Click Login')}
          />
          <Button
            title="Forgot a Password"
            variant="forgotPasswrodContainer"
            variantTitle="forgotPasswrodStyle"
            onClick={() => console.log('Click Forgot')}
          />
          <HrLine />
          <GoogleButton onClick={() => console.log('Click Google')} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#f4f1f8', //#f4f1f8
    height: Dimensions.get('window').height,
  },
  imageStyle: {
    marginTop: 35,
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
  },
});

export default Login;
