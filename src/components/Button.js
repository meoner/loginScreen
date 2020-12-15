import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Button(props) {
  return (
    <View styl={styles.container}>
      <TouchableOpacity
        style={styles[`${props.variant}`]}
        onPress={props.onClick}>
        <Text style={styles[`${props.variantTitle}`]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    marginHorizontal: 50,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c0099',
    borderRadius: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 2,
  },
  forgotPasswrodContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswrodStyle: {
    color: '#5c0099',
    fontWeight: '800',
  },
});
export {Button};
