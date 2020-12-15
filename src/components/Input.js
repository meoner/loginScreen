import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function Input(props) {
  return (
    <View style={styles.textInputStyle}>
      <TextInput
        keyboardType={props.keyboardType}
        inlineImageLeft={props.inputIcon}
        inlineImagePadding={30}
        placeholder={props.placeholder}
        placeholderTextColor="gray"
        onChangeText={(value) => props.onText(value)}
        autoFocus={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    backgroundColor: 'white',
    marginTop: 15,
    marginHorizontal: 50,
    borderRadius: 25,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
});
export {Input};
