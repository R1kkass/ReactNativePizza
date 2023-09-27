import Routing from "./page/Index";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { setupStore } from "./app/store/store";
import { Provider } from "react-redux";
import Wrapper from "./features/Wrapper/Wrapper";

const store = setupStore();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routing />
                <Wrapper />
            </NavigationContainer>
        </Provider>
    );
}
