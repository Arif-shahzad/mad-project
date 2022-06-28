//complete
import React, {useContext} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Admin({navigation}) {

    const {logout} = useContext(AuthContext);

  return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Test Management")}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:100}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Test Management</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("University Management")}}>
            <View style={{alignItems:"center",  borderRadius:10,  padding:10,}}>
                <Text style={{ backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 60, borderRadius:10}}>University Management</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{logout()}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize:20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Logout</Text>
            </View>
       </TouchableOpacity>
    </View>
  );
}