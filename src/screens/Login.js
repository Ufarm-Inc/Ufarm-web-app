import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, TextInput, CheckBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';



const Login= ({navigation}) => {
  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }}>


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>


   


          {/* The navigational bar section */}

            <View style={tailwind('flex flex-row justify-between items-center px-3 mt-4')}> 

            <Ionicons name="md-close" size={24} color="gray" />
            <Text style={tailwind('text-gray-900 text-3xl tracking-wide font-body font-black')}> Login </Text>  

            <Text 

          onPress={() => navigation.navigate('Register')}
            
            style={tailwind('text-green-500 text-xl font-black tracking-wider font-body')}> 
            
            Register 
            
            </Text>    
        
            </View>

            {/* End of the navigational bar */}

           
        {/* The form section */}

        <View  style={tailwind('mt-48 px-3 justify-center')}>

  

        <TextInput
        style={tailwind('bg-gray-100 mt-8 h-12 p-6 text-gray-800 rounded-lg text-lg font-body tracking-wider')}
        placeholder="Email"
          />

        <TextInput
        style={tailwind('bg-gray-100 h-12 p-6 text-gray-800 mt-8 rounded-lg text-lg font-body tracking-wider')}
        placeholder="Password"
     
          />

          

        

          {/* The sign up botton starts */}

          <View style={tailwind('mt-12')}>

  
            <Text 

            onPress={() => navigation.navigate('YouFarm')}
            
            style={[styles.btn, tailwind('py-3 px-3 rounded-md font-black text-lg tracking-wider text-center text-white')]} > 
            
            Login
            </Text>

            </View>

            {/* The sign up button ends */}

            <Text 
            onPress={() => navigation.navigate('ResetPassword')}
            style={tailwind('mt-12 text-green-600 text-lg tracking-wider font-body text-center')}> 
            Forgot Password </Text>  
     

          </View>

            {/* End of the form section */}


     
            
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
 
});

export default Login