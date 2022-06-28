//complete
import firestore from '@react-native-firebase/firestore';
import React, {useState, useContext, useEffect}from 'react';
import { Text, View, ScrollView} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export function Test_result({navigation}) {

    const {user} = useContext(AuthContext);
    const [t_data,sett_data] = useState([]);
    const [loading, setLoading] = useState(true);

    const a_t_u = async ()=>{
        console.log(user.uid);
        const d = [];
        await firestore()
        .collection("Usernames")
        .doc(user.uid)
        .get()
        .then((documentSnapshot)=>{
            if(documentSnapshot.exists)
            {
                var st = documentSnapshot.data().tests_results;
                sett_data(st.split(";"));
            }
        });
        setLoading(false);
    }
  
    useEffect((()=>{a_t_u()}), []);
  
    if(loading){
        return null;
    }
    else
    return (
        <View style={{flex:1, backgroundColor: "lightgrey"}}>
            <ScrollView>  
                {
                    t_data.map(item =>(
                        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:30}}>
                            <View style={{margintop:30, marginRight:60, padding:10, backgroundColor:"white", borderRadius: 10}}>
                                <Text>{item.split(",")[0]}</Text>
                            </View>
                            <View style={{margin:10, padding:10, backgroundColor:"white", borderRadius: 10}}>
                                <Text>{item.split(",")[1]}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
       </View>
    );
}