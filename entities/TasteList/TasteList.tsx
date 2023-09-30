import { Text, View } from "react-native";
import { pizzaApi } from "@/app/services/PizzaService";
import { AddTasteText, TasteContainer, TasteView } from "./styles";
import TasteUnit from "@/shared/TasteUnit/TasteUnit";

const TasteList = () => {
    const { data: taste, isError } = pizzaApi.useGetAllTasteQuery(0);

    return (
        <TasteContainer>
            <AddTasteText>Добавить по вкусу</AddTasteText>
            <TasteView>
                {taste?.taste.map((tas) => (
                    <TasteUnit key={tas._id} tas={tas} />
                ))}
            </TasteView>
        </TasteContainer>
    );
};

export default TasteList;
