import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routing from "./page/Index";
import { NavigationContainer } from "@react-navigation/native";
import { setupStore } from "./app/store/store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const store = setupStore();


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routing />
            </NavigationContainer>
        </Provider>
    );
}
