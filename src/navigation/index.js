import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../styles/variables';
import Onboarding from '../screens/Onboarding';
import RegisterEmail from '../screens/Register';
import RegisterBvn from '../screens/Register/RegisterBvn';
import RegisterInfo from '../screens/Register/RegisterInfo';
import RegisterNames from '../screens/Register/RegisterNames';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.primaryPurple,
          headerTitle: '',
        }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen name="RegisterEmail" component={RegisterEmail} />
        <Stack.Screen name="RegisterBvn" component={RegisterBvn} />
        <Stack.Screen name="RegisterInfo" component={RegisterInfo} />
        <Stack.Screen name="RegisterNames" component={RegisterNames} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
