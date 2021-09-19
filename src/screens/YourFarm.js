import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Landing from './Landing'
import Register from './Register'


import tailwind from 'tailwind-rn';

const Tab = createBottomTabNavigator();



const YourFarm = ({navigation}) => {
  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]}>


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>


   


          {/* The navigational bar section */}

    
          
            <Text style={tailwind('mt-6 text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Your Farm </Text>  


    

            {/* End of the navigational bar */}

           
        {/* The form section */}

        <View  style={tailwind('mt-8 px-3 justify-center')}>

          <Text style={tailwind('mt-8 text-gray-600 font-body tracking-wider text-lg font-bold')} >Farm Farang - Phetchaburi </Text>

        <Image source={require('../../assets/plotimage1.png')}
              style={tailwind('mt-8 flex flex-row h-64 w-full justify-center items-center')}
        />

          <Text style={tailwind('mt-8 text-gray-600 font-body tracking-wider text-lg')}> Start farming, select your vegetables and our next available plot will be allocated to you.  </Text>

  

    


          {/* The sign up botton starts */}

          <View style={tailwind('mt-12')}>

            <Text 

            onPress={() => navigation.navigate('Xplore')}
            
            style={[styles.btn, tailwind('py-3 px-3 rounded-full font-black text-lg tracking-wider text-center text-white')]} > 

            Start Farming

            </Text>


            
            <Text 

            onPress={() => navigation.navigate('Landing')}
            
            style={[styles.btn, tailwind('mt-8 py-3 px-3 rounded-full font-black text-lg tracking-wider text-center text-white')]} > 
            
            Your Plots
            </Text>

            </View>

            {/* The sign up button ends */}
     

          </View>

            {/* End of the form section */}


     
            
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

export default YourFarm