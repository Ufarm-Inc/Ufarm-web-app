import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, TextInput, Image} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';




const YourFarm = ({navigation}) => {
  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }} >


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>

          {/* The navigational bar section */}

          <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-24')}>

        <Text 
       onPress={() => navigation.goBack()}

        style={tailwind('text-green-500 text-lg  font-black')}> Back </Text>  

        <Text style={tailwind('text-gray-900 text-3xl tracking-wider text-center font-black')}> Your Farm </Text> 



        </View>

           
        {/* The form section */}

        <View  style={tailwind('mt-3 px-3 justify-center')}>

          <Text style={tailwind('mt-4 text-gray-600 tracking-wider text-lg font-bold')} >Farm Farang - Phetchaburi </Text>

        <Image source={require('../../assets/plotimage1.png')}
              style={tailwind('mt-8 flex flex-row h-64 w-full justify-center items-center')}
              resizeMode="cover"
        />

          <Text style={tailwind('mt-8 text-gray-600 tracking-wider text-lg')}> Start farming, select your vegetables and our next available plot will be allocated to you.  </Text>

  

    


          {/* The sign up botton starts */}

          <View style={tailwind('mt-4')}>

            <Text 

            onPress={() => navigation.navigate('Vegetables')}
            
            style={[styles.btn, tailwind('py-3 px-3 rounded-full font-black text-lg tracking-wider text-center text-white')]} > 

            Start Farming

            </Text>


            
            <Text 

            onPress={() => navigation.navigate('YourPlot')}
            
            style={[styles.btn, tailwind('mt-4 py-3 px-3 rounded-full font-black text-lg tracking-wider text-center text-white')]} > 
            
            Your Plots
            </Text>

            </View>

            {/* The sign up button ends */}
     

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

})

export default YourFarm