import { useEffect } from "react";
import { LoadingUn, LoadingUnit, LoadingView } from "./styles";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
    withRepeat,
    withSpring,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const LoadingCard = () => {
    const pos = useSharedValue(-120);

    const animationDefault = useAnimatedStyle(() => ({
        transform: [
            { translateX: pos.value },
            { rotateZ: "45deg" },
            { translateY: -40 },
        ],
    }));

    useEffect(() => {
        pos.value = withRepeat(
            withTiming(width + 30, {
                duration: 3000,
                easing: Easing.inOut(Easing.quad),
            }),
            Infinity
        );
    }, []);

    return (
        <LoadingUnit>
            <LoadingUn>
                <Animated.View
                    style={[
                        {
                            width: 5,
                            flex: 1,
                            backgroundColor: "rgba(255,255,255,0)",
                            overflow: "hidden",
                            minHeight: "150%",
                            elevation: 25,
                        },
                        animationDefault,
                    ]}
                ></Animated.View>
            </LoadingUn>
        </LoadingUnit>
    );
};

export default LoadingCard;
