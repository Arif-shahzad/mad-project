//complete
import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

export const AuthContext = createContext(); 

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) =>{
                    try{
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch(e){
                        Alert.alert(
                            "Error",
                            e.message,
                            [
                                {   text: "OK"  }
                            ]
                        );
                        console.log(e);
                    }
                },
                register: async (email, password) =>{
                    try{
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch(e){
                        Alert.alert(
                            "Error",
                            e.message,
                            [
                                {   text: "OK"  }
                            ]
                        );
                        console.log(e);
                    }
                },
                logout: async () =>{
                    try{
                        await auth().signOut();
                    } catch(e){
                        Alert.alert(
                            "Error",
                            e.message,
                            [
                                {   text: "OK"  }
                            ]
                        );
                        console.log(e);
                    }
                },
            }}
            > 
            {children}
        </AuthContext.Provider>
    );
}