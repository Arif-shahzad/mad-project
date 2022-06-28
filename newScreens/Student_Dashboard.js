//complete
import React , {useContext} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Student({navigation}) {

    const {logout} = useContext(AuthContext);
    
   return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
    
        <TouchableOpacity onPress={()=>{navigation.navigate("Profile Management");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:60}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Profile Management</Text>
            </View>
        </TouchableOpacity>
    
        <TouchableOpacity onPress={()=>{navigation.navigate("Available Test");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Test Attempt</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("University List");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Universities</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("Test Result");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize:20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Check Test Result</Text>
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