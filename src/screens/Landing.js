import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

import tailwind from 'tailwind-rn';



const Landing= ({navigation}) => {
  return (
    <SafeAreaView style={tailwind('h-full bg-gray-50')}>
		<View style={tailwind('mt-60 flex justify-center items-center')}>


        <Text style={tailwind('text-green-600 tracking-wider text-lg')}> Landing </Text>

		
        <Button
            onPress={() => navigation.navigate('Register')}
            title="Get started"
            style={tailwind('mt-3 text-white')}

            >

            </Button>
            
		</View>
	</SafeAreaView>
  );
}


export default Landing