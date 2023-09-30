import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
    withRepeat,
    withSpring,
} from "react-native-reanimated";
import { Dimensions, View } from "react-native";
import { useEffect } from "react";
import LoadingCard from "@/entities/LoadingCard/LoadingCard";

const width = Dimensions.get("window").width;

const LoadingMain = () => {
    return (
        <SafeAreaView style={{ height: "100%" }}>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
        </SafeAreaView>
    );
};

export default LoadingMain;
