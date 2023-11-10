import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import {createContext, useState} from 'react';

export const UserContext = createContext(null);
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
}
