import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';
import RegisterEmail from '../screens/Register';
import { colors } from '../styles/variables';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
