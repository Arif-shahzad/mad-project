//complete
import React, {useContext, useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Sign_up({navigation}) {

  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {register} = useContext(AuthContext);

  const s = ()=>{
    if(email==="" || Password==="")
      Alert.alert("Error","Fields could not be Empty",[{text: "OK"}]);
    else
      register(email, Password);
  }

  return (
    <View style={{flex:1,backgroundColor:"lightgrey"}}>
      <View style={{marginLeft:10, marginRight:10}}>
        <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Email:</Text>
        <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Enter Your Email" value = {email} onChangeText={setEmail}/>
        <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Password:</Text>
        <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder="Enter Password" value = {Password} onChangeText={setPassword}/>
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
          <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}} onPress={()=>{setEmail("");setPassword("")}}>
            <Text>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"green", borderRadius: 10}}
          onPress = {()=>s()}>
            <Text>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>  
  );
}