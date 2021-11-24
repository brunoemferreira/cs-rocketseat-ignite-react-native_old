import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
    //onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})

