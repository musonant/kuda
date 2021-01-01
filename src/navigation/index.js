import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Onboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
