import { Text, View } from "react-native";
import { SelectView, SizeView, TextView } from "./styles";
import { FC, useState } from "react";
import { ISize } from "./interface";

const Size: FC<ISize> = ({ callback, price }) => {
    const [position, setPosition] = useState(50);

    return (
        <View style={{ minHeight: 35 }}>
            <SizeView>
                <SelectView position={position} />
                <TextView
                    onPress={() => {
                        setPosition(0);
                        callback(Number(price) - 200, "Маленькая");
                    }}
                >
                    <Text>Маленькая</Text>
                </TextView>
                <TextView
                    onPress={() => {
                        setPosition(50);
                        callback(Number(price), "Средняя");
                    }}
                >
                    <Text>Средняя</Text>
                </TextView>
                <TextView
                    onPress={() => {
                        setPosition(100);
                        callback(Number(price) + 200, "Большая");
                    }}
                >
                    <Text>Большая</Text>
                </TextView>
            </SizeView>
        </View>
    );
};

export default Size;
