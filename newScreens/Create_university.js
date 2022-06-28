//complete
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function Create_university({navigation}) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [contact, setContact] = useState("");

    const create_u = async ()=>{
        if(name==="" || address==="" || Email==="" || contact==="")
            Alert.alert("Error","Fields could ot be empty", [{Text:"Ok"}]);
        else{
            await firestore()
            .collection("University")
            .doc()
            .set({"name":name, "address":address, "email":Email, "contact":contact})
            .then(()=>{
                Alert.alert(
                    "Successfull",
                    "The university added successfully",
                    [{text:"Ok", onPress:()=>{navigation.navigate("University Management")}}]
                );
            });
        }
    }

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Name:</Text>
                </View>
                <TextInput multiline={true} numberOfLines ={3} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} value = {name} onChangeText = {setName}/>
     
                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Address:</Text>
                </View>
                <TextInput multiline={true} numberOfLines ={3} style={{borderWidth:1, fontSize: 15, borderColor:"white", padding:10, margin:10}}  value = {address} onChangeText = {setAddress}/>

                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Email:</Text>
                </View>
                <TextInput multiline={true} numberOfLines ={3} style={{borderWidth:1, fontSize: 15, borderColor:"white", padding:10, margin:10}}  value = {Email} onChangeText = {setEmail}/>
                
                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Contact Number:</Text>
                </View>
                <TextInput multiline={true} numberOfLines ={3} style={{borderWidth:1, fontSize: 15, borderColor:"white", padding:10, margin:10}}  value = {contact} onChangeText = {setContact}/>

                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}} onPress = {()=>create_u()}>
                        <Text>FINISH</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}