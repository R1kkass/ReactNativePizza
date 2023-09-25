import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routing from "./page/Index";
import { NavigationContainer } from "@react-navigation/native";
import { setupStore } from "./app/store/store";
import { Provider } from "react-redux";
import { useCallback, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const store = setupStore();


export default function App() {

    useEffect(()=>{
        SecureStore.getItemAsync('basketId').then(async (e)=>{
            if(!e){
                await SecureStore.setItemAsync('basketId', String(Date.now()))
            }
            console.log(await SecureStore.getItemAsync('basketId'));
        })
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routing />
            </NavigationContainer>
        </Provider>
    );
}
