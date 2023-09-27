import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth/Auth";
import Registration from "./Registration/Registration";
import { useLayoutEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import Personal from "./Personal/Personal";
import { useFocusEffect } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const UserRouter = () => {
    const [token, setToken] = useState<string | null>();

    useFocusEffect(() => {
        SecureStore.getItemAsync("token").then((e) => {
            setToken(e);
        });
    });

    return (
        <Stack.Navigator>
            {token ? (
                <Stack.Screen
                    name="Вход"
                    options={{ headerShown: false }}
                    component={Personal}
                />
            ) : (
                <>
                    <Stack.Screen
                        name="Вход"
                        options={{ headerShown: false }}
                        component={Auth}
                    />
                    <Stack.Screen
                        name="Регистрация"
                        options={{ headerShown: false }}
                        component={Registration}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};

export default UserRouter;
