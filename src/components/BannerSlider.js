import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';
import StyleSheet from 'react-native-media-query';
import tailwind from 'tailwind-rn';







const BannerSlider = ({data,  navigation}) => {


  return (

            <View>

                <Image source={data.image} style={[tailwind('rounded-lg'), {height:300, width:250}]} />

                <Text 
                style={tailwind('mt-3 text-gray-900 text-lg tracking-wider text-center')}> {data.text}</Text>

   
            </View>

            
  )

}
  


export default BannerSlider