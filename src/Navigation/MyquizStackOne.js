import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyQuizes from '../Screens/MyQuizes';
import CreateQuiz from '../Screens/CreateQuiz';
import AddQuizQstn from '../Screens/AddQuizQstn';
import QuizDetails from '../Screens/QuizDetails'
const Stack = createStackNavigator();

export default function MyquizStackOne() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Myquiz" component={MyQuizes}  />
        <Stack.Screen name="CreateQuiz" component={CreateQuiz}  />

        <Stack.Screen name="AddQuizQstn" component={AddQuizQstn}  />
        <Stack.Screen name="QuizDetails" component={QuizDetails}  />

        
    </Stack.Navigator>
  );
}