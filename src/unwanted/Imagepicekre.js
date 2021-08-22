import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async () => {
        if(Platform.OS != "web"){
            const {status}= await ImagePicker.requestCamaraRollPermissionAsync();
            c
            if(status !== 'granted'){
                alert("no")
            }
        }
    
    }
  }, []);

  const pickImage = async () => {
   
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
