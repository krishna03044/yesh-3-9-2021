import React from 'react';
import { StyleSheet, View } from 'react-native';
import Draw from './src/Navigation/Drawer'
import { NavigationContainer } from '@react-navigation/native';



import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme ,Appbar} from 'react-native-paper';
import { name as appName } from './app.json';
import { DrawerActions } from 'react-navigation';


export default function App() {
  return (

    <PaperProvider  >
    <Appbar.Header>
         <Appbar.Action
         
          onPress={()=>{
            navigation.dispatch(DrawerActions.openDrawer())
          }}
          />
           <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Content title="Quiz " subtitle="Subtitle" />
        
    </Appbar.Header>
    <NavigationContainer>
          <Draw></Draw>
    </NavigationContainer>
     
</PaperProvider>
   
   
  );
}
AppRegistry.registerComponent(appName, () => Main);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
