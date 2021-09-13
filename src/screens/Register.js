import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import tailwind from 'tailwind-rn';



const Register= ({navigation}) => {
  return (
    <SafeAreaView style={tailwind('h-full bg-gray-50 px-96')}>


            <View style={tailwind('flex flex-row justify-between items-center px-8')}> 

            <Ionicons name="md-close-circle" size={32} color="green" />
            <Text style={tailwind('text-green-600 text-2xl tracking-wider font-body')}> Sign Up </Text>  

            <Text style={tailwind('text-green-600 text-lg tracking-wider font-body')}> Login </Text>    
        
            </View>

           
		
        <Button
            onPress={() => navigation.navigate('Login')}
            title="Register"
            style={tailwind('m-auto text-white')}

            >


            </Button>

	</SafeAreaView>
  );
}


export default Register