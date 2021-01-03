import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Input = ({ placeholder, value, toggleVisibility, ...inputProps }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(
    toggleVisibility || !!inputProps.secureTextEntry,
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
      {toggleVisibility && (
        <Pressable
          style={styles.eyeButton}
          onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Icon
            name={secureTextEntry ? 'md-eye' : 'md-eye-off'}
            size={24}
            color="#aaa"
          />
        </Pressable>
      )}
    </View>
  );
};

export default Input;
