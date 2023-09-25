import { Text, View } from "react-native";
import { SelectView, SizeView, TextText, TextView } from "./styles";
import { useState, FC } from "react";
import { ITaste } from "./interface";

const Taste: FC<ITaste> = ({ callback }) => {
    const [position, setPosition] = useState(0);


    return (
        <View style={{ minHeight: 35 }}>
            <SizeView>
                <SelectView position={position} />
                <TextView onPress={() => {callback('Традиционное'); setPosition(0)}}>
                    <Text>Традиционное</Text>
                </TextView>
                <TextView onPress={() => {callback('Тонкое'); setPosition(100)}}>
                    <Text>Тонкое</Text>
                </TextView>
            </SizeView>
        </View>
    );
};

export default Taste;
