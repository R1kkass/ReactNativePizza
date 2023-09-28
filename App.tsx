import Routing from "./page/Index";
import {
    NavigationContainer,
    useFocusEffect,
    DefaultTheme,
} from "@react-navigation/native";
import { setupStore } from "./app/store/store";
import { Provider } from "react-redux";
import Wrapper from "./features/Wrapper/Wrapper";

const store = setupStore();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },
};

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer theme={MyTheme}>
                <Routing />
                <Wrapper />
            </NavigationContainer>
        </Provider>
    );
}
