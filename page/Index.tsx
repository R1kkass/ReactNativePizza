import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "./Main/Main";
import Router from "./product";
import UserRouter from "./user";
import Basket from "./Basket/Basket";

const Tab = createBottomTabNavigator();

const Routing = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === "Главная") {
                        iconName = focused ? "pizza" : "pizza-outline";
                    } else if (rn === "Корзина") {
                        iconName = focused ? "basket" : "basket-outline";
                    } else if (rn === "Избранное") {
                        iconName = focused ? "heart" : "heart-outline";
                    } else if (rn === "Пользователь") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: "orangered",
                inactiveTintColor: "grey",
                blur: 0.3,
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 },
            }}
        >
            <Tab.Screen
                name="Главная"
                options={{ headerShown: false }}
                component={Router}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="Корзина"
                component={Basket}
            />
            <Tab.Screen
                name="Пользователь"
                options={{ headerShown: false }}
                component={UserRouter}
            />
        </Tab.Navigator>
    );
};

export default Routing;
