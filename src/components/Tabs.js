import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image} from 'react-native';


const Tab = createBottomTabNavigator();

import Explore from '../screens/Explore'
import YourFarm from '../screens/YourFarm'
import Setty from '../screens/Settings'


const BottomTabs = ({navigation}) =>{

    return(

      <>


  <Tab.Navigator

 
    
screenOptions={({ route }) => ({

      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
       showLabel:false,
       headerShown:false,
       tabBarStyle: {
          position: 'absolute',
          bottom:0,
          left:0,
          right:0,
          elevation:0,
          height:60,
          padding:10,
          paddingBottom:10,
          backgroundColor:'#F3F4F6',


        
        },
    })}
  
  >
    <Tab.Screen name="Explore" component={Explore} 
    
           
    options={{

      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'planet';
   
           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },


    }}
    
    />
    <Tab.Screen name="Your Farm" component={YourFarm} 
 


    options={{
      
      tabBarIcon: ({ focused }) => {
        

        return(

          <View style={{alignItems:'center', justifyContent:'center'}}>
          <Image 
          source={require('../../assets/Path46.png')} 
          resizeMode= 'contain'
          style={{

            width:25,
            height:25,


          }} 
          
          />

          {/* <Text style={{fontSize:8}}> You Farm</Text> */}


        </View>

        )
        
        },
       


    }}
    
    />

    <Tab.Screen name="Settings" component={Setty} 
    
    options={{

      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'settings';
   
           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },


    }}
    
    />
  </Tab.Navigator>
 

  </>



    )
}



export default BottomTabs