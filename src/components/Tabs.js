import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Landing from './Landing'
import Register from './Register'


const Tabs = () =>{

    return(

        
  <Tab.Navigator>
    <Tab.Screen name="Landing" component={Landing} />
    <Tab.Screen name="Register" component={Register} />
  </Tab.Navigator>



    )
}



export default Tabs