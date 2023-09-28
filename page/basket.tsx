import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Basket from "./Basket/Basket";
import Submit from "./Submit/Submit";

const Stack = createNativeStackNavigator();

const BasketRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Корзина"
                options={{ headerShown: false }}
                component={Basket}
            />
            <Stack.Screen
                name="Подтвердить"
                options={{ headerShown: false }}
                component={Submit}
            />
        </Stack.Navigator>
    );
};

export default BasketRouter;
