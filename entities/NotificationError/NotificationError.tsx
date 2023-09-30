import { Text } from "react-native";
import Notification from "@/shared/Notification/Notification";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const NotificationError = () => {
    return (
        <Notification>
            <MaterialIcons name="error-outline" color="orangered" size={30} />
            <Text style={{ fontSize: 20 }}>Ошибка</Text>
        </Notification>
    );
};

export default NotificationError;
