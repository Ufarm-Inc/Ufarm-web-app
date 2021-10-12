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

  const isCarousel = React.useRef(null)

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

            style={tailwind('text-green-500 text-lg font-black')}> Back </Text>  

            <Text style={tailwind('text-gray-900 text-3xl tracking-wider text-center font-black')}> Your Farm </Text> 



            </View>

              {/* The navigational bar section Ends */}
              
            <Text style={tailwind('mt-6 text-gray-900 text-xl tracking-wider text-center font-black')}> Choose Up To Three vegetables For Your Plot</Text>


          

            {/* The first carousel */}

            <Text 
            
            onPress={() => navigation.navigate('Confirm')}
            style={tailwind('mt-4 text-gray-600 text-xl text-center font-black')}> Select your first vegetable</Text>

          <View
    
          
          style={tailwind('mt-6')}>
         
              <Carousel
              ref={isCarousel}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40 }
              itemWidth={250}
        
              useScrollView={false}
              
            />

            </View>

            {/* End of the first carousel */}

           
            <Text style={tailwind('mt-4 text-gray-600 text-xl text-center font-black')}> Select your Second vegetable</Text>

            <View style={tailwind('mt-6')}>
              <Carousel
              ref={isCarousel}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40 }
              itemWidth={250}
        
              useScrollView={false}
              
            />

            </View>


            <Text style={tailwind(' mt-4 text-gray-600 text-xl text-center font-black')}> Select your Third vegetable</Text>

            <View style={tailwind('mt-6')}>
          
              <Carousel
              ref={isCarousel}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40 }
              itemWidth={250}
        
              useScrollView={false}
              
            />

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
 
});

export default Vegetables