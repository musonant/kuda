import React from 'react';
import { Text, StatusBar, SafeAreaView, Image, Pressable } from 'react-native';

import styles from './styles';
import logo from '../../../assets/images/kuda-logo-purple.png';
import onboardingImage from '../../../assets/images/onboarding-image.png';
import Button from '../../components/Button';

const Onboarding = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.contentContainer}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
        <Image
          style={styles.onboardingImage}
          source={onboardingImage}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>Welcome to your freedom</Text>
        <Button
          onPress={() => navigation.navigate('RegisterEmail')}
          title="Join Kuda"
          containerStyle={styles.actionButton}
        />
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.moreActionText}>
            Have an Account? <Text style={styles.green}>Sign in</Text>
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default Onboarding;
