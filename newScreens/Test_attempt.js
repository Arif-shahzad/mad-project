//complete
import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect, useContext} from 'react';
import { Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Test_attempt({navigation, route}) {

    const {name, content} = route.params;
    const [old, setOld] = useState("");
    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [num, setNum] = useState(0);
    const [listm, setListm] = useState("");
    const {user} = useContext(AuthContext);

    const Stor = async (n)=>{
        await firestore()
        .collection("Usernames")
        .doc(user.uid)
        .get()
        .then(documentSnapshot =>{
            if(documentSnapshot.exists){
                if(documentSnapshot.data().tests_results===""){
                    setOld((name+","+n+"/"+content.length));
                }
                else{
                    setOld((documentSnapshot.data().tests_results+";"+name+","+n+"/"+content.length));
                }
                stor2();
            }
        });
    }

    const stor2 = async()=>{
        await firestore()
        .collection("Usernames")
        .doc(user.uid)
        .update({"tests_results":old})
        .then(navigation.navigate("Student Dashboard"));
    }

    const dis = ()=>{
        if(num<content.length){
            setQuestion(content[num].question);
            setOptionA(content[num].optionA);
            setOptionB(content[num].optionB);
            setOptionC(content[num].optionC);
            setOptionD(content[num].optionD);
            setNum((num+1));
        }
        else{
            var n = 0;
            Alert.alert(
                "Completion",
                "The test is complete",
                [{text:"Ok", onPress:()=>{
                    for(var i = 0 ; i<listm.length ; i++){
                        if(content[i].optionCor==listm[i])
                            n= n+1;      
                    }
                    Alert.alert(
                        "Marks",
                        "your Obtained marks and Total marks are: "+n+"/"+content.length,
                        [{text:"Ok", onPress:()=>{Stor(n);}}]
                    );
                }}]
            );
        }
    }

    useEffect((()=>{
        dis();
    }), []);

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Question:</Text>
                </View>
                <Text style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}}>{question}</Text>
         
                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Option:</Text>
                </View>

                <TouchableOpacity style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} onPress = {()=>{setListm(listm+"1");dis();}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>{optionA}</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} onPress = {()=>{setListm(listm+"2");dis();}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>{optionB}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} onPress = {()=>{setListm(listm+"3");dis();}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>{optionC}</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} onPress = {()=>{setListm(listm+"4");dis();}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>{optionD}</Text>
                </TouchableOpacity>
            </ScrollView>
       </View>
    );
}