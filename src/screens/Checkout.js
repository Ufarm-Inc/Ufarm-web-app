import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, Image, FlatList} from 'react-native';
import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';


const Checkout= ({navigation}) => {



  return (

    
    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }} >


      {/* The container */}
		<View style={tailwind('bg-white h-full rounded-lg px-4')}>


                {/* The navigational bar section */}

          <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-24')}>

            <Text 
            onPress={() => navigation.navigate('vegetables')}

            style={tailwind('text-green-500 text-lg  font-body font-black')}> Back </Text>  

            <Text style={tailwind('text-gray-900 text-2xl text-center font-black')}> Checkout </Text> 



            </View>

              {/* The navigational bar section Ends */}
              <Text style={tailwind('mt-3 text-gray-900 text-lg text-center font-black')}> payment for plots and selected vegetables </Text> 

              <Image 
              
                source={require('../../assets/checkout.png')}
                style={tailwind('mt-36 h-96 w-full rounded-md justify-center items-center')}
                resizeMode="contain"

                />

             



           
<Text style={[styles.btn, tailwind('rounded-full mt-3 px-4 py-4 text-white text-xl text-center font-medium tracking-wider')]}> Make Payment</Text>

<Text style={ tailwind('mt-3 mb-3  text-blue-400 text-sm text-center font-medium tracking-wider')}> Plot Price and Payment Information</Text>

    

            
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

export default Checkout