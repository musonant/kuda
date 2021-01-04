import React from 'react';
import { useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';
import * as yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/TextInput';
import styles from './styles';

const RegisterEmail = ({ navigation }) => {
  const [canProceed, setCanProceed] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('RegisterBvn')}
          title="Next"
          type={canProceed ? 'inline' : 'inline-disabled'}
          disabled={!canProceed}
          containerStyle={styles.nextButton}
        />
      ),
    });
  }, [navigation, canProceed]);

  const formValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required(),
  });

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustContentInsets={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Start</Text>
        <Text style={styles.bodyText}>
          Open a Kuda account with a few details.
        </Text>
        <Text style={styles.bodyText}>
          Your password must have at least 8 characters including letters and a
          number.
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirmation: '',
            referralCode: '',
          }}
          validationSchema={formValidationSchema}>
          {({ values, errors, touched, isValid, handleChange, handleBlur }) => {
            // Monitor when user can proceed
            // And update only when an input has been changed
            if (Object.keys(touched).length > 0) {
              setCanProceed(isValid);
            }

            return (
              <>
                <Input
                  placeholder="Email Address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  toggleVisibility
                  placeholder="Enter Password"
                />
                <Input
                  value={values.passwordConfirmation}
                  onChangeText={handleChange('passwordConfirmation')}
                  onBlur={handleBlur('passwordConfirmation')}
                  toggleVisibility
                  placeholder="Re-Enter Password"
                />
                <Input
                  value={values.referralCode}
                  onChangeText={handleChange('referralCode')}
                  onBlur={handleBlur('referralCode')}
                  placeholder="Referral Code (Optional)"
                />
              </>
            );
          }}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterEmail;
