import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/variables';

const RadioButton = ({ active, label, onPress = () => {} }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.circle,
          { backgroundColor: active ? colors.green : '#f9f9f9' },
        ]}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderColor: colors.green,
    borderWidth: 1,
  },
  label: {
    fontSize: 18,
    lineHeight: 30,
  },
});

export default RadioButton;
