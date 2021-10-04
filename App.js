import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

import * as Linking from 'expo-linking';



// Screen imports

import Landing from './src/screens/Landing'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import ResetPassword from './src/screens/ResetPassword'
import YourFarm from './src/screens/YourFarm'
import YourPlots from './src/screens/YourPlots'

import Explore from './src/screens/Explore'

import Settings from './src/screens/Settings'

import Vegetables from './src/screens/Vegetables'
import BottomTabs from './src/components/Tabs'



// Tailwinds Import

import tailwind from 'tailwind-rn';

// React Navigation Import

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = ()=> {
  return (

	<>



	<NavigationContainer>

	{/* <Tabs/> */}



	<Stack.Navigator 

	screenOptions={{
    headerShown: false
  }} 
  
  initialRouteName="Landing">

	  <Stack.Screen name="Landing" component={Landing}  />

	  <Stack.Screen name="Register" component={Register}  />

	  <Stack.Screen name="Login" component={Login}  />

	  <Stack.Screen name="ResetPassword" component={ResetPassword}  />



	  <Stack.Screen name="YourFarm" component={BottomTabs}  />

	  <Stack.Screen name="YourPlots" component={BottomTabs}  />

	  <Stack.Screen name="Explore" component={BottomTabs}  />

	  <Stack.Screen name="Settings" component={BottomTabs}  />

	  <Stack.Screen name="Vegetables" component={BottomTabs}  />

	</Stack.Navigator>
  </NavigationContainer>

  </>
  );
}


export default App