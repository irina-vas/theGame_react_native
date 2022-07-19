import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const CustomTitle = ({ children }) => {
  return (
    <Text style={styles.titleContainer}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 24,
    borderWidth: 2,
    fontWeight: 'bold',
    borderColor: Colors.white,
    textAlign: 'center',
    padding: 12,
    color: Colors.white
  },
});
