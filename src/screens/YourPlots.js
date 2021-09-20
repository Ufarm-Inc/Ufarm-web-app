import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet,Image, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Landing from './Landing'
import Register from './Register'


import tailwind from 'tailwind-rn';

const Tab = createBottomTabNavigator();



const YourPlots = ({navigation}) => {

    const Plots = [

        {
          id: 1,
          img:require('../../assets/plotimage2.png'),
          text:"Plot #26 Loc- UFarm-FarmFarang"

        },
        {
          id: 2,
          img:require('../../assets/plotimage1.png'),
          text:"Plot #27 Loc- UFarm-FarmFarang."

        }

    ]
  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]}>


            {/* The container */}

    <View style={tailwind('bg-white h-full rounded-lg')}>


   


          {/* The navigational bar section */}

            <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-24')}>

            <Text 
            onPress={() => navigation.navigate('YourFarm')}
            
            style={tailwind('text-green-500 text-lg  font-body font-black')}> Back </Text>  

            <Text style={tailwind('text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Your plots </Text> 

        

            </View>

            {/* End of the navigational bar */}

            <FlatList

        style={tailwind('mt-6')}
        keyExtractor={item => item.id}
        data={Plots}
        renderItem={({item})=>(

  <View style={tailwind(' justify-between items-center px-3 py-3')}>
     <Image source={item.img}
      style={tailwind('h-72 w-full rounded-md object-cover object-center')}
      
/>

<Text style={tailwind('mt-3 text-gray-600 text-xl tracking-wider')}> {item.text} </Text>

    </View>

 

)}

/>
       




          </View>

     

            {/* End of the container */} 

            <NavigationContainer
            independent={true}
            >
      <Tab.Navigator>
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>

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

export default YourPlots