import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, Image} from 'react-native';
import StyleSheet from 'react-native-media-query';
import tailwind from 'tailwind-rn';

import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../../utils/Dimensions';
import { sliderData } from '../../model/data';


const Vegetables= ({navigation}) => {

  const renderBanner  = ({item, index}) =>{

      return <BannerSlider data={item}/>

  }


    


  return (

    
    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }} >


      {/* The container */}
		<View style={tailwind('bg-white h-full rounded-lg px-4')}>


                {/* The navigational bar section */}

          <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-24')}>

            <Text 
            onPress={() => navigation.navigate('YourFarm')}

            style={tailwind('text-green-500 text-lg  font-body font-black')}> Back </Text>  

            <Text style={tailwind('text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Your Farm </Text> 



            </View>

              {/* The navigational bar section Ends */}

              <Carousel
             ref={c => {
              this._carousel = c;
            }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40 }
              itemWidth={300}
            />

    

            
		</View>

    {/* End of the container */}
	</SafeAreaView>
  );
}
const {ids, styles} = StyleSheet.create({
  container: {
   
    paddingLeft:550,
    paddingRight:550,
    '@media (max-width: 400px)': {
      paddingLeft:50,
      paddingRight:50,
  },

  '@media (max-width: 1200px)': {
    paddingLeft:800,
    paddingRight:800,
},

  },

  btn: {
   
    backgroundColor:'#72A320',

  },
 
});

export default Vegetables