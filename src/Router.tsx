import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main';
import StartUpScreen from './screens/StartUpScreen';
import {StyleSheet} from 'react-native';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Router() {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome" component={StartUpScreen} />
      <Screen name="Home" component={Main} />
    </Navigator>
  );
}
