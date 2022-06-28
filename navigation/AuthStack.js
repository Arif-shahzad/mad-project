//complete
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Student_counsellor} from '../newScreens/Student_counsellor';
import {Sign_up} from '../newScreens/Sign_up';
import {Login} from '../newScreens/Login';


const Stack = createNativeStackNavigator();

const AuthStack =  () => {
  return (
    <Stack.Navigator initialRouteName='Student Counsellor'>
      <Stack.Screen name="Student Counsellor" component={Student_counsellor} options={{ title: 'Student Counsellor' }}/>
        <Stack.Screen name="Sign Up" component={Sign_up} options={{ title: 'Sign Up' }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
    </Stack.Navigator>
  );
}

export default AuthStack;
  