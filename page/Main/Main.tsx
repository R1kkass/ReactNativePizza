import { ScrollView, Text } from "react-native";
import { useEffect } from "react";
import PizzaApi from "../../app/api/pizza";
import {pizzaApi} from "../../app/services/PizzaService"
import Card from "../../entities/Card/Card";
import { InView, IOScrollView } from "react-native-intersection-observer"
import { SafeAreaView } from "react-native-safe-area-context";

const Main = ({navigation}:any) => {

    const {data: pizzas, isError} = pizzaApi.useGetAllPizzasQuery(0)


    return (
        <SafeAreaView>
            <IOScrollView style={{height: "100%", backgroundColor: 'white'}}>
                {
                    isError ? <Text>Ошибка</Text> : pizzas?.pizzas.slice(0,100).map((pizza)=>(
                    <Card navigation={navigation} key={pizza._id} {...pizza} />                
                    ))
                }
            </IOScrollView>
        </SafeAreaView>
    );
};

export default Main;
