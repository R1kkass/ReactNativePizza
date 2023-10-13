import { useFocusEffect } from "@react-navigation/native";
import { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withSequence,
} from "react-native-reanimated";
import { INotification } from "./interface";

const width = Dimensions.get("window").width;

const Notification: FC<INotification> = ({ children }) => {
    const linear = useSharedValue(-width);

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ translateX: linear.value }],
    }));

    useFocusEffect(useCallback(() => {}, []));

    useEffect(() => {
        linear.value = withSequence(
            withTiming(16, {
                duration: 1200,
                easing: Easing.inOut(Easing.bezierFn(1, -0.5, 1, 1)),
            }),
            withTiming(16, {
                duration: 2000,
                easing: Easing.inOut(Easing.bezierFn(1, -0.5, 1, 1)),
            }),
            withTiming(-width, {
                duration: 900,
                easing: Easing.inOut(Easing.bezierFn(1, -0.5, 1, 1)),
            })
        );
    }, []);

    return (
        <Animated.View style={[styles.box, animatedDefault]}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: width-32,
        position: "absolute",
        flexDirection: "row",
        height: 70,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.95)",
        elevation: 99,
        zIndex: 30,
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
        top: 10,
    },
});

export default Notification;
