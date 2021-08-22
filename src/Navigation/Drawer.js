import React from 'react';
import Landing from '../BasicComponents/Landing'
import Login from '../Screens/Login'
import Dashboard from '../Screens/Dashboard'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawCustom from './Custom/DrawCustom'
import Myquizstack from './Myquizstack';

const Drawer = createDrawerNavigator();

export default function Drawercomp() {
  return (
    
      <Drawer.Navigator     drawerContent={(props) => <DrawCustom {...props} />}>
        <Drawer.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        <Drawer.Screen name="Login" component={Login} /> 
        <Drawer.Screen name="MyQuizes" component={Myquizstack} />    

      </Drawer.Navigator>
  
  );
}
