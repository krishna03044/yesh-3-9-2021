import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawCustom from './Custom/DrawCustom'
import Myquizstack from './Myquizstack';
import { Provider as PaperProvider, Appbar} from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Drawercomp({navigation}) {
  return (
    
    <PaperProvider  >
    <Appbar.Header>      
           <Appbar.Action icon="menu"  onPress={()=>{
            navigation.dispatch(DrawerActions.openDrawer())
          }} />
        <Appbar.Content title="Quiz " subtitle="Subtitle" />
        
    </Appbar.Header>
      <Drawer.Navigator     drawerContent={(props) => <DrawCustom {...props} />}>
       
        <Drawer.Screen name="MyQuizes" component={Myquizstack} options={{headerShown:false}} />    

      </Drawer.Navigator>
      </PaperProvider  >
  );
}
