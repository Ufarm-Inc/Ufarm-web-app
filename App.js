import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

// Screen imports

import Landing from './src/screens/Landing'
import Register from './src/screens/Register'
import Login from './src/screens/Login'


// Tailwinds Import

import tailwind from 'tailwind-rn';

// React Navigation Import

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = ()=> {
  return (
	<NavigationContainer>
	<Stack.Navigator 

	screenOptions={{
    headerShown: false
  }} 
  
  initialRouteName="Landing">
	  <Stack.Screen name="Landing" component={Landing}  />
	  <Stack.Screen name="Register" component={Register}  />
	  <Stack.Screen name="Login" component={Login}  />

	</Stack.Navigator>
  </NavigationContainer>
  );
}


export default App