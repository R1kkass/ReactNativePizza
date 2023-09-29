import { ActivityIndicator, View } from "react-native";

const Loading = () => {
    return (
        <View
            style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999,
                height: "100%",
                width: "100%",
                top: 0,
            }}
        >
            <ActivityIndicator size={"large"} color={"orangered"} />
        </View>
    );
};

export default Loading;
