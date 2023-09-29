import { SafeAreaView } from "react-native-safe-area-context";
import { PersolText, PersonalEmail, PersonalMainView, PersonalView } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as SecureStore from "expo-secure-store";
import { Text, TouchableOpacity } from "react-native";
import { appJwtDecode } from "../../app/jwtDecode";
import { useAppSelector } from "../../app/store/hooks";
import { personalApi } from "../../app/services/PersonalService";

const Personal = ({ navigation }: any) => {
    const token = useAppSelector((state) => state.storageeReducer.token);

    const {data, isLoading, isError} = personalApi.useGetOrderQuery()
    console.log(isError);
    

    async function exit() {
        await SecureStore.setItemAsync("token", "");
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
                <PersonalEmail>{appJwtDecode(token).email}</PersonalEmail>
            </PersonalView>
        </SafeAreaView>
    );
};

export default Personal;
