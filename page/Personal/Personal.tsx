import { SafeAreaView } from "react-native-safe-area-context";
import { PersolText, PersonalMainView, PersonalView } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as SecureStore from "expo-secure-store";
import { TouchableOpacity } from "react-native";

const Personal = ({navigation}: any) => {
    async function exit() {
        await SecureStore.setItemAsync("token", "");
        navigation.navigate('Главная')
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
            </PersonalView>
        </SafeAreaView>
    );
};

export default Personal;
