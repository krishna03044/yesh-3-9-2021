import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import * as React from 'react';
  import { View, Text ,Image} from 'react-native';
  import User from '../../Model/User'

 export default function DrawCustom(props) {
    console.log(props)
    return (
       
      <View>
      <View>
       <View>
           <Image style={{width:20,height:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"}}/>
       </View>
       <View>
           <Text>{global.user}</Text>
       </View>
      </View>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
  
          <DrawerItem label="Help" onPress={() => alert('Link to help')} />
          <DrawerItem label="Signout" onPress={() => alert('signout')} />
        </DrawerContentScrollView>
      </View>
    );
  }