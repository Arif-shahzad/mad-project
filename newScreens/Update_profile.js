//completed
import React, {useState, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Update_profile({navigation}) {

    const [email, setEmail] = useState("")
    const {user} = useContext(AuthContext);

    const update_u = ()=>{
        if(email==="")
            Alert.alert("Error","Fields could not be Empty",[{text: "OK"}]);
        else{
            try{
                user.updateEmail(email);
                navigation.navigate("Student Dashboard");
            }catch(e){
                Alert.alert(
                    "Error",
                    e.message,
                    [{text:"ok"}]
                );
            }
        }
    }

    return (
        <View style={{flex:1,marginLeft:10, marginRight:10}}>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Email:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder = "Enter new Email" value={email} onChangeText = {setEmail}/>

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}} onPress={()=>{setEmail("")}}>
                    <Text>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"green", borderRadius: 10}} onPress = {()=>{update_u()}}>
                    <Text>UPDATE</Text>
                </TouchableOpacity>
            </View>
        </View>    
    );
}