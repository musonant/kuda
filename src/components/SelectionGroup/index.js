import React from 'react';
import { StyleSheet, View } from 'react-native';
import RadioButton from '../RadioButton';

const SelectionGroup = ({ options = [], selectedValue, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          label={option.value || option.label}
          active={option.value === selectedValue}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default SelectionGroup;
