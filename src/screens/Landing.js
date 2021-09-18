import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, Image} from 'react-native';

import tailwind from 'tailwind-rn';



const Landing= ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} >


      {/* The container */}
		<View style={tailwind('bg-white h-full rounded-lg justify-center px-4')}>


        <Image source={require('../../assets/ufarmlogo.png')}
              style={tailwind('flex flex-row h-52 w-52 justify-center items-center')}
        />


          <View style={tailwind('mt-24')}> 
    
          <Text 

          onPress={() => navigation.navigate('Register')}

          style={[styles.btn, tailwind('py-3 px-3 rounded-md font-black text-lg tracking-wider text-center text-white')]} > 

          Get started
          </Text>

            </View>
            
		</View>

    {/* End of the container */}
	</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
   
    paddingLeft:600,
    paddingRight:600,

  },

  btn: {
   
    backgroundColor:'#72A320',

  },
 
});

export default Landing