import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const Button = ({ title, containerStyle = {} }) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          { opacity: pressed ? 0.6 : 1 },
        ]}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
