import { Text } from "react-native";
import { pizzaApi } from "../../app/services/PizzaService";
import Card from "../../entities/Card/Card";
import { IOScrollView } from "react-native-intersection-observer";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextError } from "../../shared/Error/styles";

const Main = ({ navigation }: any) => {
    const { data: pizzas, isError, refetch, isLoading } = pizzaApi.useGetAllPizzasQuery(0);

    return (
        <SafeAreaView>
            <IOScrollView style={{ height: "100%", backgroundColor: "white" }}>
                {isLoading && <Text>Загрузка...</Text>}
                {isError ? (
                    <TextError/>
                ) : (
                    pizzas?.pizzas
                        .map((pizza) => (
                            <Card
                                navigation={navigation}
                                key={pizza._id}
                                {...pizza}
                            />
                        ))
                )}
            </IOScrollView>
        </SafeAreaView>
    );
};

export default Main;
