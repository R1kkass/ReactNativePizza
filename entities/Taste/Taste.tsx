import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SelectView, SizeView, TextText, TextView } from "./styles";
import { useState, FC } from "react";
import { ITaste } from "./interface";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const width = Dimensions.get("window").width;

const Taste: FC<ITaste> = ({ callback }) => {
    const left = useSharedValue(0);

    const animatedDefault = useAnimatedStyle(() => ({
        marginLeft: left.value,
    }));

    const handlePress = (tab: number) => {
        const newOffset = (() => {
            switch (tab) {
                case 0:
                    return 0;
                case 100:
                    return (width - 32) / 2;
                default:
                    return 0;
            }
        })();

        left.value = withTiming(newOffset,{
            duration: 300,
            easing: Easing.inOut(Easing.circle),
        });
    };

    return (
        <View style={{ minHeight: 35 }}>
            <SizeView>
                <Animated.View style={[styles.select, animatedDefault]} />
                <TextView
                    onPress={() => {
                        callback("Традиционное");
                        handlePress(0);
                    }}
                >
                    <Text>Традиционное</Text>
                </TextView>
                <TextView
                    onPress={() => {
                        callback("Тонкое");
                        handlePress(100);
                    }}
                >
                    <Text>Тонкое</Text>
                </TextView>
            </SizeView>
        </View>
    );
};

export default Taste;

const styles = StyleSheet.create({
    select: {
        width: "50%",
        backgroundColor: "#d4d4d4",
        borderRadius: 20,
        height: 33,
        position: "absolute",
        bottom: -2,
        left: 0,
        right: 0,
    },
});
