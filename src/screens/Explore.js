import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, FlatList} from 'react-native';

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

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]}>


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>

          {/* The navigational bar section */}

        
            <Text style={tailwind('mt-2 text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Explore </Text>  

            {/* End of the navigational bar */}

           
        {/* The Explore section starts*/}

        <View  style={tailwind('mt-2 px-3 justify-center')}>

        <Image source={require('../../assets/bangkokmap1.png')}
              style={tailwind('mt-8 flex flex-row h-80 w-full justify-center items-center')}

              
        />

        <View>

        <Text style={tailwind('mt-2 text-gray-900 text-lg font-body font-black')}> Select Location </Text>  

        <Text style={tailwind('mt-2 text-gray-500 text-lg tracking-wider font-body font-medium')}> Select Your Location and our next availale spot will be available to You </Text>  

        </View>

        {/* The Card List section starts */}

        <FlatList

        style={tailwind('mt-6')}
        keyExtractor={item => item.id}
        data={Farm}
        renderItem={({item})=>(

          <View style={tailwind('flex flex-row justify-between items-center')}>
             <Image source={require('../../assets/bangkokmap1.png')}
              style={tailwind('h-12 w-12 rounded-md ')}
              
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

const styles = StyleSheet.create({
  container: {
   
    paddingLeft:600,
    paddingRight:600,

  },

  btn: {
   
    backgroundColor:'#72A320',

  },

})

export default Explore