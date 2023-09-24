import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Main from "./Main/Main"
import Product from "./Product/Product"

const Stack = createNativeStackNavigator()

const Router = ()=>{
    return(
            <Stack.Navigator>
                <Stack.Screen name="Главная" options={{headerShown: false}}  component={Main} />
                <Stack.Screen name="Товар" options={({route}: any)=>({title: route.params.name})} component={Product}/>
            </Stack.Navigator>
    )
}

export default Router