import React, {useState, useEffect}from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export function Available_test({navigation}) {

  const [t_data,sett_data] = useState([]);
  const [loading, setLoading] = useState(true);
  const a_t_a = async ()=>{
      const d = [];
      await firestore()
      .collection("Tests")
      .get()
      .then((querySnapshot)=>{
          querySnapshot.forEach( doc =>{
              const {name, content} = doc.data();
              d.push({key:doc.id, name, content});
              sett_data(d);
          });
      });
      setLoading(false);
  }

  useEffect((()=>{a_t_a()}), []);

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
              <TouchableOpacity onPress={()=>navigation.navigate("Test Attempt", {name:item.name, content:item.content})}> 
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 17,  textAlign:"center", height: 50,justifyContent: "center",alignContent:"center", marginBottom: 10, borderRadius:10}}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))
        }            
      </ScrollView>  
    </View>
  );
}