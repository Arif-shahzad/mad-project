//complete
import React, {useContext}from 'react';
import { Text, View, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


export function Profile_management({navigation}) {

    const {user} = useContext(AuthContext);

    const doc_delete = async ()=>{
        await firestore()
        .collection('Usernames')
        .doc(user.uid)
        .delete()
        .then(()=>{console.log("user deleted")});
    }
    
    const delete_u = ()=>{
        Alert.alert(
            "Verification",
            "Are you sure you want to delete your profile",
            [
                { text: "OK", onPress: () => {
                    doc_delete();
                    user.delete();
                } },
                { text: "Cancel", onPress: () => navigation.navigate("Profile Management") }
            ]
        );
    }
    
 return (
    <View style={{flex:1, backgroundColor: "lightgrey"}}>
        
        <TouchableOpacity onPress={()=>{navigation.navigate("Update Profile");}}>
            <View style={{alignItems:"center",  borderRadius:10, padding:10, marginTop:50}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Update Profile</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>delete_u()}>
            <View style={{alignItems:"center",  borderRadius:10,  padding:10,}}>
                <Text style={{paddingTop:10, backgroundColor: "white", width: 200, fontSize: 20, alignContent:"center", textAlign:"center", height: 50, borderRadius:10}}>Delete Profile</Text>
            </View>
        </TouchableOpacity>

    </View>
  );
}