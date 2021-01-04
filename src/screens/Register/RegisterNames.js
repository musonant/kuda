import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import Button from '../../components/Button';
import Input from '../../components/TextInput';
import styles from './styles';

const RegisterNames = ({ navigation }) => {
  const [canProceed, setCanProceed] = useState(false);
  const [inputValues, setInputValues] = useState({
    lastName: '',
    firstName: '',
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('RegisterInfo')}
          title="Next"
          type={canProceed ? 'inline' : 'inline-disabled'}
          disabled={!canProceed}
          containerStyle={styles.nextButton}
        />
      ),
    });
  }, [navigation, canProceed]);

  const changeText = (field, text) => {
    const newValues = {
      ...inputValues,
      [field]: text,
    };
    setInputValues(newValues);
    setCanProceed(!!newValues.firstName && !!newValues.lastName);
  };

  return (
    <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your Name</Text>
        <Text style={styles.bodyText}>
          This should be your full legal name as it appears on all your
          documents
        </Text>
        <Input
          onChangeText={(text) => changeText('lastName', text)}
          placeholder="Surname / Last Name"
          value={inputValues.lastName}
        />
        <Input
          onChangeText={(text) => changeText('firstName', text)}
          placeholder="First Name"
          value={inputValues.firstName}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterNames;
