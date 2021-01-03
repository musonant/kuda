import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors } from '../../styles/variables';
import styles from './styles';

const Button = ({
  title,
  onPress = () => {},
  containerStyle = {},
  type,
  disabled,
}) => {
  const extraStyle = typeToStyle[type] || {};
  const extraTextStyle = textStyles[type] || {};
  const backgroundColor = typeToColor[type] || colors.primaryPurple;

  return (
    <View style={[styles.mainContainer, { backgroundColor }, containerStyle]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          extraStyle,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        disabled={disabled}>
        <Text style={[styles.title, extraTextStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
};

const typeToStyle = {
  inline: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  'inline-disabled': {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
};

const typeToColor = {
  'inline-disabled': 'transparent',
};

const textStyles = {
  inline: {
    fontWeight: '500',
    fontSize: 16,
  },
  'inline-disabled': {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '500',
  },
};

export default Button;
