import React ,{useEffect}from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Landing({navigation}) {
 


    return (
      <View>
              <View>
                      {/* <LottieView
                   autoPlay
                    style={{
                      width: 400,
                      height: 400,
                      backgroundColor: '#eee',
                    }}
                    source={require('../logo/logo.json')}
                    // OR find more Lottie files @ https://lottiefiles.com/featured
                    // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                  /> */}
              </View>
              <Text> Landing</Text>
              <Button title="login" onPress={()=>navigation.navigate("Login")}/>
              <Button title="signup" onPress={()=>navigation.navigate("signup")}/>
       
  
      </View>
       
    );

  }
 

