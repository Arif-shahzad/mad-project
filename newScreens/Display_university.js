//complete
import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function Display_university({route}) {

    const {id} = route.params;
    const [loading, setLoading] = useState(true);
    const [u_data,setu_data] = useState({});
    
    const u_d = async ()=>{
        await firestore()
        .collection("University")
        .doc(id)
        .get()
        .then((documentSnapshot)=>{
            if(documentSnapshot.exists){
                setu_data({"name":documentSnapshot.data().name, "address":documentSnapshot.data().address, "email":documentSnapshot.data().email, "contact":documentSnapshot.data().contact});
            }
        });
        setLoading(false);
    }

    useEffect((()=>{u_d()}), []);

    if(loading){
        return null;
    }
    else
    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView style={{margin:15}}>
                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 22, color:"red"}}>University name:</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 20}}>{u_data.name}</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 22, color:"red"}}>Address:</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 20}}>{u_data.address}</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 22, color:"red"}}>Email:</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 20}}>{u_data.email}</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 22, color:"red"}}>Contact number:</Text>
                </View>

                <View style={{padding:5}}>
                    <Text style={{ paddingTop:10, fontSize: 20}}>{u_data.contact}</Text>
                </View>
            </ScrollView>
        </View>
    );
}