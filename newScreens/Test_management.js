//complete
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

export function Test_management({navigation}) {

   return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
    
        <TouchableOpacity onPress={()=>{navigation.navigate("File Name")}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:60}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Create</Text>
            </View>
        </TouchableOpacity>
    
        <TouchableOpacity onPress={()=>{navigation.navigate("Available Test Update")}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Update</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("Available Test Delete")}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Delete</Text>
            </View>
        </TouchableOpacity>    
    </View>
  );
}