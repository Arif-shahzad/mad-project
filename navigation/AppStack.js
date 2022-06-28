//complete
import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from "./AuthProvider";
import {Profile_management} from '../newScreens/profile_management';
import {Admin} from '../newScreens/Admin_Dashboard';
import {Student} from '../newScreens/Student_Dashboard';
import {Update_profile} from '../newScreens/Update_profile';
import {Test_result} from '../newScreens/Test_result';
import {University_List} from '../newScreens/University_List';
import {Test_attempt} from '../newScreens/Test_attempt';
import {Create_test} from '../newScreens/Create_test';
import {Available_test} from '../newScreens/Available_test';
import {Available_test_u} from '../newScreens/Available_Test_u';
import {Update_test} from '../newScreens/Update_test';
import {Available_test_d} from '../newScreens/Available_test_d';
import {Display_university} from '../newScreens/Display_university';
import {Test_management} from '../newScreens/Test_management';
import {University_management} from '../newScreens/University_management';
import {Available_universities_u} from '../newScreens/Available_universities_u';
import {Available_universities_d} from '../newScreens/Available_universities_d';
import {Create_university} from '../newScreens/Create_university';
import {Update_university} from '../newScreens/Update_university';
import { File_name } from '../newScreens/create_test_name';

const Stack = createNativeStackNavigator();

const AppStack=()=>{

  const {user} = useContext(AuthContext);
  const [firstSreen, setfirstScreen] = useState("");
  const [loading, setLoading] = useState(true);

  const adding_user = async ()=>{
    await firestore()
    .collection('Usernames')
    .doc(user.uid)
    .set({"role":"student","tests_results":""})
    .then(()=>{console.log("user added")});
  }

  const determine = async ()=>{
    await firestore()
    .collection('Usernames')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ){
        if(documentSnapshot.data().role==="admin")
          setfirstScreen("Admin Dashboard");
        else
          setfirstScreen("Student Dashboard");
        setLoading(false);
      }
      else{
        adding_user();
        setfirstScreen("Student Dashboard");
        setLoading(false);
      }
    })
  }

  useEffect(()=>{
    determine();
  }, []);

  if(loading){
    return null;
  }
  else  
  return(
      <Stack.Navigator initialRouteName={firstSreen}>
        <Stack.Screen name="Student Dashboard" component={Student} options={{ title: 'Student Counsellor' }}/>
          <Stack.Screen name="Profile Management" component={Profile_management} options={{ title: 'Profile Management' }}/>
            <Stack.Screen name="Update Profile" component={Update_profile} options={{ title: 'Update Profile' }}/>
          <Stack.Screen name="Available Test" component={Available_test} options={{ title: 'Available Test' }}/>
            <Stack.Screen name="Test Attempt" component={Test_attempt} options={{ title: 'Test Attempt' }} />
          <Stack.Screen name="University List" component={University_List} options={{ title: 'University List' }}/>
            <Stack.Screen name="University Display" component={Display_university} options={{ title: 'University Display' }}/>
          <Stack.Screen name="Test Result" component={Test_result} options={{ title: 'Test Result' }}/>
        
        <Stack.Screen name="Admin Dashboard" component={Admin} options={{ title: 'Student Counsellor' }}/>
          <Stack.Screen name="Test Management" component={Test_management} options={{ title: 'Test Management' }}/>
            <Stack.Screen name="File Name" component={File_name} options={{ title: 'File Name' }}/>
              <Stack.Screen name="Create Test" component={Create_test} options={{ title: 'Create Test' }}/>
            <Stack.Screen name="Available Test Update" component={Available_test_u} options={{ title: 'Available Test' }}/>
              <Stack.Screen name="Update Test" component={Update_test} options={{ title: 'Update Test' }}/>
            <Stack.Screen name="Available Test Delete" component={Available_test_d} options={{ title: 'Available Test' }}/>

          <Stack.Screen name="University Management" component={University_management} options={{ title: 'University Management' }}/>
            <Stack.Screen name="Create University" component={Create_university} options={{ title: 'Create University' }}/>
            <Stack.Screen name="Available University Update" component={Available_universities_u} options={{ title: 'Available Universities' }}/>
              <Stack.Screen name="Update University" component={Update_university} options={{ title: 'Update University' }}/>
            <Stack.Screen name="Available University Delete" component={Available_universities_d} options={{ title: 'Available Universities' }}/>
      </Stack.Navigator>
  );
}

export default AppStack;