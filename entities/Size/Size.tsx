import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SelectView, SizeView, TextView } from "./styles";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { ISize } from "./interface";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const width = Dimensions.get("window").width;

const Size: FC<ISize> = ({ callback, price }) => {
    const left = useSharedValue((width - 32)/3);

    const animatedDefault = useAnimatedStyle(() => ({
        marginLeft: left.value,
    }));

    const handlePress = (tab: number) => {
        const newOffset = (() => {
            switch (tab) {
                case 0:
                    return 0;
                case 50:
                    return (width - 32) / 3;
                case 100:
                    return (width - 32) / 1.5;
                default:
                    return 0;
            }
        })();

        left.value = withTiming(newOffset, {
            duration: 300,
            easing: Easing.inOut(Easing.circle),
        });
    };


    return (
        <View style={{ minHeight: 35 }}>
            <SizeView>
                <Animated.View style={[animatedDefault, styles.select]} />
                <TextView
                    onPress={() => {
                        handlePress(0);
                        callback(-200, "Маленькая");
                    }}
                >
                    <Text>Маленькая</Text>
                </TextView>
                <TextView
                    onPress={() => {
                        handlePress(50);
                        callback(0, "Средняя");
                    }}
                >
                    <Text>Средняя</Text>
                </TextView>
                <TextView
                    onPress={() => {
                        handlePress(100);
                        callback(200, "Большая");
                    }}
                >
                    <Text>Большая</Text>
                </TextView>
            </SizeView>
        </View>
    );
};

export default Size;

const styles = StyleSheet.create({
    select: {
        width: "33%",
        backgroundColor: "#d4d4d4",
        borderRadius: 20,
        height: 33,
        position: "absolute",
        bottom: -2,
        left: 0,
        right: 0,
    },
});
