import { SafeAreaView } from "react-native-safe-area-context";
import {
    PersolText,
    PersonalEmail,
    PersonalMainView,
    PersonalView,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as SecureStore from "expo-secure-store";
import { Text, TouchableOpacity } from "react-native";
import { appJwtDecode } from "@/app/jwtDecode";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { personalApi } from "@/app/services/PersonalService";
import { addBasketId, addToken } from "@/app/store/StorageSlice";
import CardPersonal from "@/entities/CardPersonal/CardPersonal";

const Personal = ({ navigation }: any) => {
    const token = useAppSelector((state) => state.storageeReducer.token);

    const {
        data: orders,
        isLoading,
        isError,
    } = personalApi.useGetOrderQuery(token);
    const dispatch = useAppDispatch();

    async function exit() {
        let date = String(Date.now());
        dispatch(addToken(""));
        dispatch(addBasketId(date));

        await SecureStore.setItemAsync("token", "");
        await SecureStore.setItemAsync("basketId", date);

        navigation.navigate("Главная");
    }

    return (
        <SafeAreaView>
            <PersonalView>
                <PersonalMainView>
                    <PersolText>Профиль</PersolText>
                    <TouchableOpacity onPress={exit}>
                        <Ionicons
                            name="exit-outline"
                            color="orangered"
                            size={38}
                        />
                    </TouchableOpacity>
                </PersonalMainView>
                <PersonalEmail>
                    {appJwtDecode(token || "")?.email}
                </PersonalEmail>
                {orders?.map((order) => (
                    <CardPersonal key={order._id} {...order} />
                ))}
            </PersonalView>
        </SafeAreaView>
    );
};

export default Personal;
