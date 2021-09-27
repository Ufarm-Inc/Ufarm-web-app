import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Explore from './Explore'
import YourFarm from './YourFarm'
import Settings from './Settings'


const Tabs = () =>{

    return(

        <NavigationContainer
        independent={true}
        
        >
        
  <Tab.Navigator
    
    tabBarOptions ={{

            showLabel:true,
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

  </NavigationContainer>



    )
}



export default Tabs