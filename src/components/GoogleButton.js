import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function GoogleButton(props) {
  return (
    <View styl={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.onClick}>
        <Image
          source={require('./assets/google.png')}
          style={{marginRight: 10}}
        />
        <Text style={styles.textStyle}>join with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    height: 40,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5d78f2',
    borderRadius: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});
export {GoogleButton};
