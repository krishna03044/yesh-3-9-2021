import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../BasicComponents/Landing';
import Drawercomp from "./Drawer"
import Login from '../Screens/Login'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Image ,Text} from 'react-native';
const Tab = createBottomTabNavigator();

export default function Tabav() {
  return (
    <Tab.Navigator 

   screenOptions={{
       tabBarShowLabel:false,
    
      tabBarInactiveBackgroundColor:"#561234",
      tabBarInactiveTintColor:"#ffffff",
      tabBarLabelStyle:{
            color:"#e53935",
            
      },
    tabBarStyle:{
        position:'absolute',
        bottom:20,
        right:20,
        left:20,
        backgroundColor:"#000000",
       
        
    },
   
     style:{
        borderRadius:20,
     }
   }}
   >
      <Tab.Screen  name="Landing" component={Landing} 
      options={{
        tabBarIcon:({focused})=>
           ( <View>
                <Image 
                source={{uri:"https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg"}}

                 style={{
                     width:20,
                     height:20,
                     tintColor:focused?"#123456" :"#456745",
                    }}
                />
                <Text>Landing</Text>
            </View>)
        
          
          }} />
   
        <Tab.Screen name="Login" component={Login} options={{headerShown:false}} /> 
      <Tab.Screen name="Drawercomp" component={Drawercomp} options={{headerShown:false}} />
     
    </Tab.Navigator>
  );
}