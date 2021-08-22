

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyQuizes from '../Screens/MyQuizes';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();
export default function Myquizstack() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="profile" component={Profile} />
    <Tab.Screen  name="Myquiz" component={MyQuizes} />
  </Tab.Navigator>
    
  
  
  );
}

