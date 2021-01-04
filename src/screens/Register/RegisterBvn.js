import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import Button from '../../components/Button';
import Input from '../../components/TextInput';
import styles from './styles';

const RegisterBvn = ({ navigation }) => {
  const [canProceed, setCanProceed] = useState(false);
  const [bvn, setBvn] = useState('');

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

  const changeText = (text) => {
    setBvn(text);
    setCanProceed(!!text);
  };

  return (
    <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>What's Your BVN?</Text>
        <Text style={styles.bodyText}>
          We need your Bank Verification Number (BVN) to confirm who you are.
        </Text>
        <Text style={[styles.bodyText, styles.hintText]}>
          We will send a code to the phone number linked to your BVN. If you do
          not have access to that phone number, skip this step.
        </Text>
        <Input
          onChangeText={changeText}
          keyboardType="phone-pad"
          placeholder="Your BVN"
          value={bvn}
        />
        <Pressable>
          <Text style={styles.greenHint}>I don't know my BVN</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterBvn;
