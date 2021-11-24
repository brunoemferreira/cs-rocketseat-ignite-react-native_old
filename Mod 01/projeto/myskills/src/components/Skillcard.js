import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity
      key={skill}
      style={styles.buttonSkill
      }>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 1.5
  }
})
