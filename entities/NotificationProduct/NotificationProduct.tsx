import { Text } from "react-native";
import Notification from "@/shared/Notification/Notification";
import Ionicons from "react-native-vector-icons/Ionicons";

const NotificationProduct = () => {
    return (
        <Notification>
            <Ionicons
                name="checkmark-circle-outline"
                color="orangered"
                size={30}
            />
            <Text style={{ fontSize: 20 }}>Товар добавлен</Text>
        </Notification>
    );
};

export default NotificationProduct;
