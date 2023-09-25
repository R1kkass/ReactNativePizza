import { Text, View } from "react-native";
import { SelectView, SizeView, TextText, TextView } from "./styles";
import { useState } from "react";

const Taste = () => {
    const [position, setPosition] = useState(0);

    return (
        <View style={{ minHeight: 35 }}>
            <SizeView>
                <SelectView position={position} />
                <TextView onPress={() => setPosition(0)}>
                    <Text>Традиционное</Text>
                </TextView>
                <TextView onPress={() => setPosition(100)}>
                    <Text>Тонкое</Text>
                </TextView>
            </SizeView>
        </View>
    );
};

export default Taste;
