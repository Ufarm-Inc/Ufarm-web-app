import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Explore from '../screens/Explore'
import YourFarm from '../screens/YourFarm'
import Settings from '../screens/Settings'


const BottomTabs = ({navigation}) =>{

    return(

      <>


  <Tab.Navigator
 
    
    screenOptions ={{

            showLabel:true,
            headerShown: false,
            style:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadis:15,
                height:90
            }

    }}
  
  >
    <Tab.Screen name="Explore" component={Explore} />
    <Tab.Screen name="Your Farm" component={YourFarm} />

    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
 

  </>



    )
}



export default BottomTabs