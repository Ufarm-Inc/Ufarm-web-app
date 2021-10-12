import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, Image, FlatList} from 'react-native';
import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';


const Confirm= ({navigation}) => {

  const veg = [

    {
      id: 1,
      img:require('../../assets/babyspinach4.png'),
      text:"Baby Spinach"

    },
    {
      id: 2,
      img:require('../../assets/eggplant3.png'),
      text:"Egg Plant."

    },

    {
      id: 3,
      img:require('../../assets/eggplant3.png'),
      text:"Egg Plant."

    },



]

  return (

    
    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }} >


      {/* The container */}
		<View style={tailwind('bg-white h-full rounded-lg px-4')}>


                {/* The navigational bar section */}

          <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-2')}>

            <Text 
            onPress={() => navigation.navigate('vegetables')}

            style={tailwind('text-green-500 text-lg  font-body font-black')}> Back </Text>  

            <Text style={tailwind('text-gray-900 text-lg text-center font-black')}> Confirm vegetable Selection </Text> 



            </View>

              {/* The navigational bar section Ends */}



              <FlatList

          style={tailwind('mt-6')}
          keyExtractor={item => item.id}
          data={veg}
          renderItem={({item})=>(

          <View style={tailwind('flex flex-row justify-between items-center px-2 py-3')}>
          <Image source={item.img}

          style={tailwind('h-40 w-40 rounded-md object-cover object-center')}
          resizeMode="cover"

      />

      <Text 

      onPress={() => navigation.navigate('Vegetables')}
      style={tailwind('mt-3 text-gray-600 text-xl font-medium tracking-wider')}> {item.text} </Text>

      </View>

)}

/>

<Text 
onPress={() => navigation.navigate('Checkout')}
style={[styles.btn, tailwind('rounded-full mt-3 px-4 py-4 text-white text-xl text-center font-medium tracking-wider')]}> Confirm Selection</Text>

<Text 
  onPress={() => navigation.goBack()}
style={ tailwind('mt-3 mb-3  text-blue-400 text-sm text-center font-medium tracking-wider')}> Change your mind? Edit Selection here</Text>

    

            
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

export default Confirm