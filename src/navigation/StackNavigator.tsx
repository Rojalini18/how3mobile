import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../theme/colors';
import NavigationScreen from '../screens/home/NavigationScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.background,
        },
      }}
      initialRouteName="NavigationScreen">
      {/* Screens */}
      <Stack.Screen
        name="NavigationScreen"
        component={NavigationScreen}
        options={{title: 'Navigation'}}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
