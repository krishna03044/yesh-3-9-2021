import React from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import User from './model/User';

export default function Loginsuccess() {
 
   var text=""
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 200,
        paddingHorizontal: 30,
    },
   
  });

  for(let i in global.user ){
    
    if(global.user[i]==="@") break;
   text += global.user[i]
  }
  return (
    <View style={styles.container}>
      <Text >loginsuchfghjghjghjcess</Text>
      <Text>{text}</Text>
    </View>
  );
}
