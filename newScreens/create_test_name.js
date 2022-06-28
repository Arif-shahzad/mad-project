//completed
import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

export function File_name({navigation}) {

    const [name, setName] = useState("")

    return (
        <View style={{flex:1,marginLeft:10, marginRight:10}}>
            <Text style={{marginTop:15, fontSize:20, marginBottom:5}}>Name:</Text>
            <TextInput style={{borderWidth:1, borderColor:"black", padding:5}} placeholder = "Enter file name" value={name} onChangeText = {setName}/>

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}} onPress={()=>{setName("")}}>
                    <Text>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"green", borderRadius: 10}} onPress = {()=>{navigation.navigate("Create Test", {tname:name,})}}>
                    <Text>CREATE</Text>
                </TouchableOpacity>
            </View>
        </View>    
    );
}