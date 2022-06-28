//compete
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function Available_test_d({navigation}) {
  
  const [t_data,sett_data] = useState([]);
  const [loading, setLoading] = useState(true);
  const a_t_d = async ()=>{
      const d = [];
      await firestore()
      .collection("Tests")
      .get()
      .then((querySnapshot)=>{
          querySnapshot.forEach( doc =>{
              const {name} = doc.data();
              d.push({key:doc.id, name});
              sett_data(d);
          });
      });
      setLoading(false);
  }

  useEffect((()=>{a_t_d()}), []);

  const delete_t = async (id)=>{
      await firestore()
      .collection("Tests")
      .doc(id)
      .delete()
      .then(()=>{
          Alert.alert(
              "Successfull",
              "The Test deleted successfully",
              [{text:"Ok", onPress:()=>{navigation.navigate("Test Management")}}]
          );
      });
  }

  if(loading){
      return null;
  }
  else
  return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
      <ScrollView>
      {
        t_data.map(item => (
          <View style={{flex:1,flexDirection: "column", alignItems:"center", marginTop: 20, paddingHorizontal: 10}} key = {item.key}>
            <TouchableOpacity onPress={()=>{delete_t(item.key)}}> 
              <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 17,  textAlign:"center", height: 50,justifyContent: "center",alignContent:"center", marginBottom: 10, borderRadius:10}}>{item.name}</Text>
                </TouchableOpacity>
              </View>
        ))
      }            
      </ScrollView>
    </View>
  );
}