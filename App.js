import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

// Screen imports

import Landing from './src/screens/Landing'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import ResetPassword from './src/screens/ResetPassword'
import YourFarm from './src/screens/YourFarm'
import YourPlots from './src/screens/YourPlots'

import Explore from './src/screens/Explore'

import Settings from './src/screens/Settings'




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

	  <Stack.Screen name="ResetPassword" component={ResetPassword}  />



	  <Stack.Screen name="YourFarm" component={YourFarm}  />

	  <Stack.Screen name="YourPlots" component={YourPlots}  />

	  <Stack.Screen name="Explore" component={Explore}  />

	  <Stack.Screen name="Settings" component={Settings}  />


	</Stack.Navigator>
  </NavigationContainer>
  );
}


export default App