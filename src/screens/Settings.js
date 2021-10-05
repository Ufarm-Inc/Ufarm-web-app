import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, View, Text, Button, TextInput, CheckBox} from 'react-native';

import StyleSheet from 'react-native-media-query';


import tailwind from 'tailwind-rn';




const Setty = ({navigation}) => {
  return (

    <SafeAreaView style={[styles.container, tailwind('bg-gray-50 h-full')]} dataSet={{ media: ids.container }} >


            {/* The container */}

            <View style={tailwind('bg-white h-full rounded-lg')}>

               {/* The navigational bar section */}

            <View style={tailwind('mt-4 flex flex-row px-2 justify-between items-center pr-32')}>

                <Text 
                onPress={() => navigation.goBack()}

                style={tailwind('text-green-500 text-lg  font-body font-black')}> Back </Text>  

                <Text style={tailwind('text-gray-900 text-3xl tracking-wider text-center font-body font-black')}> Settings </Text> 



                </View>

{/* End of the navigational bar */}
           
        {/* The form section */}

        <View  style={tailwind('mt-44 px-3 justify-center')}>

          <View style={tailwind('py-6 px-16 justify-between flex flex-row')}>
          
          <CheckBox
              
              />

              <Text style={tailwind('text-lg tracking-wider font-body text-blue-600 font-bold')}> Notification Settings </Text>

            </View>

            <View style={tailwind('py-6 px-16 justify-between flex flex-row')}>
      
                <CheckBox
              
                />

              <Text style={tailwind('text-lg pr-20  tracking-wider font-body text-blue-600 font-bold')}> NewsLetter </Text>
        </View>
        

          {/* The sign up botton starts */}

          <View style={tailwind('mt-12')}>

  
            <Text 

            onPress={() => navigation.goBack()}
            
            style={[styles.btn, tailwind('py-3 px-3 rounded-full font-black text-lg tracking-wider text-center text-white')]} > 
            
            Change Email
            </Text>

            <Text 

            onPress={() => navigation.goBack()}

            style={[styles.btn, tailwind('py-3 px-3 mt-8 rounded-full font-black text-lg tracking-wider text-center text-white')]} > 

            Contact Support
            </Text>

            </View>

            {/* The sign up button ends */}

           
     

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

export default Setty