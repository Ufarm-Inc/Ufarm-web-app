import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';

import StyleSheet from 'react-native-media-query';

import tailwind from 'tailwind-rn';






const Explore = ({navigation}) => {

    const Farm = [

        {
          id: 1,
          img:"../../assets/bangkokmap1.png",
          text:"Farm Farang located just south of Bangkok in Phetchaburi. Plots avaliable for growing assorted vegetables."

        },
        {
          id: 2,
          img:"../../assets/bangkokmap1.png",
          text:"Farm #2 Located just north of Bangkok. Plots avaliable for growing assorted vegetables."

        }

    ]

  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }}>


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>

          {/* The navigational bar section */}

          <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-24')}>

          <Text 
       onPress={() => navigation.goBack()}

        style={tailwind('text-green-500 text-lg  font-body font-black')}> Back </Text>  


          <Text style={tailwind('text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Explore </Text>  

          </View>

        
          

            {/* End of the navigational bar */}

           
        {/* The Explore section starts*/}

        <View  style={tailwind('mt-2 px-3 justify-center')}>

        <Image source={require('../../assets/bangkokmap1.png')}
              style={tailwind('mt-8 flex flex-row h-80 w-full justify-center items-center')}
              resizeMode="cover"

              
        />

        <View>

        <Text style={tailwind('mt-2 text-gray-900 text-lg font-body font-black')}> Select Location </Text>  

        <Text style={tailwind('mt-2 text-gray-500 text-lg tracking-wider font-body font-medium')}> Select Your Location and our next availale spot will be available to You </Text>  

        </View>

        {/* The Card List section starts */}

        <FlatList

        style={tailwind('mt-3')}
        keyExtractor={item => item.id}
        data={Farm}
        renderItem={({item})=>(

          <View style={tailwind('flex flex-row justify-between items-center')}>
             <Image source={require('../../assets/bangkokmap1.png')}
              style={tailwind('h-12 w-12 rounded-md ')}
              resizeMode="cover"
              
        />

        <Text style={tailwind('text-gray-500 text-md px-4')}> {item.text} </Text>

            </View>

         

        )}
     
      />

          {/* The Card List section ends */}

          
     

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

export default Explore