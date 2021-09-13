import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

import tailwind from 'tailwind-rn';



const Login= ({navigation}) => {
  return (


    <SafeAreaView style={tailwind('h-full bg-gray-50')}>
		<View style={tailwind('mt-60 flex justify-center items-center')}>

        <Text style={tailwind('text-green-600')}> Login </Text>
		
        <Button
            onPress={() => navigation.navigate('Login')}
            title="Login now"
            style={tailwind('m-auto text-white')}

            >


            </Button>

            </View>

    

	</SafeAreaView>

  
  );
}


export default Login