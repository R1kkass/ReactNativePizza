import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Basket from "./Basket/Basket";
import Submit from "./Submit/Submit";
import { useAppSelector } from "@/app/store/hooks";

const Stack = createNativeStackNavigator();

const BasketRouter = () => {
    const token = useAppSelector((state) => state.storageeReducer.token);
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
                component={token ? Submit : Basket}
            />
        </Stack.Navigator>
    );
};

export default BasketRouter;
