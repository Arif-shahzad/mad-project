//complete
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function Update_test({navigation, route}) {

    const {id} = route.params;
    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [optionCor, setOptionCor] = useState("");
    const [listq, setListq] = useState([]);
    
    const add_q = ()=>{
        if(question==="" || optionA==="" || optionB==="" || optionC==="" || optionD==="" || optionCor==="")
            Alert.alert("Error","Fields could not be Empty",[{text: "OK"}]);
        else{
            const st = {"question":question, "optionA":optionA, "optionB":optionB, "optionC":optionC, "optionD":optionD, "optionCor":optionCor};
            setListq(listq=>[...listq, st]);
            Alert.alert("Successfull","Question added successfully",[{text: "OK"}]);
            setQuestion("");
            setOptionA("");
            setOptionB("");
            setOptionC("");
            setOptionD("");
            setOptionCor("");
        }
    }

    const upload_q = async ()=>{
        add_q();
        await firestore()
        .collection("Tests")
        .doc(id)
        .update({"content":listq})
        .then(()=>{
            Alert.alert("Successfull","Test updated successfully",[{text: "OK", onPress:()=>{navigation.navigate("Test Management")}}]);
        });
    }

    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>
            <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Question:</Text>
                </View>
                <TextInput multiline={true} numberOfLines ={3} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} placeholder = "Enter the Question" value = {question} onChangeText = {setQuestion}/>
                
                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Option:</Text>
                </View>
                
                <TextInput multiline={true} numberOfLines ={2} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} placeholder = "Enter the option A" value = {optionA} onChangeText = {setOptionA}/>

                <TextInput multiline={true} numberOfLines ={2} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} placeholder = "Enter the option B" value = {optionB} onChangeText = {setOptionB}/>

                <TextInput multiline={true} numberOfLines ={2} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} placeholder = "Enter the option C" value = {optionC} onChangeText = {setOptionC}/>

                <TextInput multiline={true} numberOfLines ={2} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} placeholder = "Enter the option D" value = {optionD} onChangeText = {setOptionD}/>

                <View style={{ borderRadius:10, padding:1, margin:10}}>
                    <Text style={{paddingTop:10, width: 200, fontSize: 20,  height: 50}}>Correct Option:</Text>
                </View>
                
                <TextInput multiline={true} numberOfLines ={2} style={{borderWidth:1, fontSize: 17, borderColor:"white", padding:10, margin:10}} placeholder = "Enter the correct option" value = {optionCor} onChangeText = {setOptionCor}/>

                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", margin:10}}>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"red", borderRadius: 10}} onPress={()=>upload_q()}>
                        <Text>FINISH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:10, padding:10, backgroundColor:"green", borderRadius: 10}} onPress = {()=>add_q()}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}