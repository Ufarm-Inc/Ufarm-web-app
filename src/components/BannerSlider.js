import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';

import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';






const BannerSlider = ({data}) => {


  return (





            <View>

                <Image source={data.image} style={{height:150, width:300}} />

   
            </View>

            
  )

}
  


export default BannerSlider