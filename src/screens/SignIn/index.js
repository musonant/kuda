import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/TextInput';

const Signin = ({ navigation }) => {
  const formValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <>
      <Text style={styles.title}>Hey, there!</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={formValidationSchema}>
        {({ values, errors, touched, isValid, handleChange, handleBlur }) => {
          return (
            <View style={styles.formContainer}>
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
                placeholder="Password"
              />
              <Button
                containerStyle={styles.actionButton}
                title="Sign In"
                disabled={Object.keys(touched).length > 0 && !isValid}
              />
              <Pressable onPress={() => navigation.navigate('')}>
                <Text style={styles.moreActionText}>
                  Have an Account? <Text style={styles.green}>Sign in</Text>
                </Text>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </>
  );
};

export default Signin;
