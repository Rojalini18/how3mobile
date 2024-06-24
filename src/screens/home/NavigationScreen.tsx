import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const NavigationScreen = ({navigation}: any) => {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <Button
        title="Onboarding Screen"
        onPress={() => navigation.navigate('MedicationScreen')}
      />
      <Button
        onPress={() => navigation.navigate('SignInScreen')}
        title="Sign In"
      />
    </View>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
