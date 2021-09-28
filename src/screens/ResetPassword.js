import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, TextInput, CheckBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';



const ResetPassword= ({navigation}) => {
  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }}>


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>


   


          {/* The navigational bar section */}

    
          
            <Text style={tailwind('mt-6 text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Reset Password </Text>  


    

            {/* End of the navigational bar */}

           
        {/* The form section */}

        <View  style={tailwind('mt-44 px-3 justify-center')}>

  

        <TextInput
        style={tailwind('bg-gray-100 mt-8 h-12 p-6 text-gray-800 rounded-lg text-lg font-body tracking-wider')}
        placeholder="Email"
          />


        

          {/* The sign up botton starts */}

          <View style={tailwind('mt-12')}>

  
            <Text 

            onPress={() => navigation.navigate('Landing')}
            
            style={[styles.btn, tailwind('py-3 px-3 rounded-md font-black text-lg tracking-wider text-center text-white')]} > 
            
            Request Password Reset
            </Text>

            </View>

            {/* The sign up button ends */}

            <Text style={tailwind('mt-12 text-gray-500 text-lg tracking-wider font-body text-center')}> An email will be sent to you shortly, please follow the instructions in the email to reset your password </Text>  
     

          </View>

            {/* End of the form section */}


     
            
            </View>

            {/* End of the container */} 

	</SafeAreaView>

  
  );
}

const {ids, styles} = StyleSheet.create({
  container: {
   
    paddingLeft:600,
    paddingRight:600,

    '@media (min-width: 320px)': {
      paddingLeft:0,
      paddingRight:0,
  },

  },

  btn: {
   
    backgroundColor:'#72A320',

  },

})

export default ResetPassword