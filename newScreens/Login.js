//complete
import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { useContext, useState } from 'react';

export function Login({navigation}) {

  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {login} = useContext(AuthContext);
  const Login = ()=>{
    if(email==="" || Password==="")
      Alert.alert("Error","Fields could not be Empty",[{text: "OK"}]);
    else
      login(email, Password);
  }

  return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
        <View style={{marginLeft:10, marginRight:10}}>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Email:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Enter Your Email" value = {email} onChangeText = {setEmail}/>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Password:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Enter Password" value = {Password} onChangeText = {setPassword}/>
        </View>
        <TouchableOpacity onPress = { ()=>Login()}>
            <View style={{flexDirection: "column", alignItems:"center",  borderRadius:5, padding:10, marginTop:20,}}>
                <Text  style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Login </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}