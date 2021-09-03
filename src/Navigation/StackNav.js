import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../BasicComponents/Landing';
import Drawercomp from "./Drawer"
import Login from '../Screens/Login'
import React from 'react';
const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
   
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> 
      <Stack.Screen name="Drawercomp" component={Drawercomp} options={{headerShown:false}} />
     
    </Stack.Navigator>
  );
}