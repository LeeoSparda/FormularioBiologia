import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-native-paper';
console.disableYellowBox=true;

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';

export default function App() {
 return (
  <NavigationContainer>
     <AuthProvider>
     <Provider>
      <StatusBar backgroundColor="#a7c66b" barStyle="light-content"/>
      <Routes/>
      </Provider>
     </AuthProvider>
  </NavigationContainer>
  );
}