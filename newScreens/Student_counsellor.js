//complete
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export function Student_counsellor({navigation}) {
  
  return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>

        <TouchableOpacity onPress={()=>{navigation.navigate("Login");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:50}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Login</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{navigation.navigate("Sign Up");}}>
            <View style={{alignItems:"center",  borderRadius:10,  padding:10,}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Sign up</Text>
            </View>
        </TouchableOpacity>
    
    </View>
  );
}