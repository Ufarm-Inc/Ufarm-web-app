import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, Image} from 'react-native';
import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';



const Landing= ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }} >


      {/* The container */}
		<View style={tailwind('bg-white h-full rounded-lg justify-center px-4')}>


        <Image source={require('../../assets/ufarmlogo.png')}
              style={tailwind('flex flex-row h-96 w-full justify-center items-center')} 
              resizeMode="contain"
              
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
const {ids, styles} = StyleSheet.create({
  container: {

    paddingLeft:0,
    paddingRight:0,

    '@media (min-width: 320px)': {
      paddingLeft:0,
      paddingRight:0,
  },



  },

  btn: {
   
    backgroundColor:'#72A320',

  },

  img: {
   
    backgroundSize:'contain',

  },
 
});

export default Landing