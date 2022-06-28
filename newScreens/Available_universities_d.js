//complete
import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function Available_universities_d({navigation}) {
    
    const [u_data,setu_data] = useState([]);
    const [loading, setLoading] = useState(true);
    const a_u_d = async ()=>{
        const d = [];
        await firestore()
        .collection("University")
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach( doc =>{
                const {address, contact, email, name} = doc.data();
                d.push({key:doc.id, name});
                setu_data(d);
            });
        });
        setLoading(false);
    }

    useEffect((()=>{a_u_d()}), []);

    const delete_u = async (id)=>{
        await firestore()
        .collection("University")
        .doc(id)
        .delete()
        .then(()=>{
            Alert.alert(
                "Successfull",
                "The university deleted successfully",
                [{text:"Ok", onPress:()=>{navigation.navigate("University Management")}}]
            );
        });
    }

    if(loading){
        return null;
    }
    else
    return (
        <View style={{ flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                {
                    u_data.map(item => (
                        <View style={{flex:1,flexDirection: "column", alignItems:"center", marginTop: 20, paddingHorizontal: 10}} key = {item.key}>
                            <TouchableOpacity onPress={()=>{delete_u(item.key)}}> 
                                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 17,  textAlign:"center", height: 50,justifyContent: "center",alignContent:"center", marginBottom: 10, borderRadius:10}}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }            
            </ScrollView>
        </View>
    );
}