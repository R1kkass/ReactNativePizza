import { SafeAreaView } from "react-native-safe-area-context";
import { PersolText, PersonalView } from "./styles";

const Personal = () => {
    return (
        <SafeAreaView>
            <PersonalView>
                <PersolText>Профиль</PersolText>
            </PersonalView>
        </SafeAreaView>
    );
};

export default Personal;
