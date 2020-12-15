import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function HrLine() {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewLeft} />
      <View>
        <Text style={styles.textView}>or</Text>
      </View>
      <View style={styles.viewRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewLeft: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginLeft: 50,
  },
  viewRight: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginRight: 50,
  },
  textView: {
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export {HrLine};
