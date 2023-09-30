import { Dimensions, TouchableNativeFeedback, View } from "react-native";
import { CardContainer, CardImage, TextIngredients, TextName } from "./styles";
import { FC, useState } from "react";
import { ICard } from "./interface";
import { InView } from "react-native-intersection-observer";
import Button from "@/shared/Button/Button";

const Card: FC<ICard> = ({
    image,
    price,
    name,
    category,
    ingredients,
    navigation,
    _id,
    weight,
}) => {
    const [view, setView] = useState(false);

    function vis(bol: boolean) {
        if (bol) {
            setView(true);
        } else {
            setView(false);
        }
    }

    return (
        <CardContainer
            onPress={() =>
                navigation.navigate("Товар", {
                    _id,
                    name,
                    price,
                    image,
                    weight,
                    ingredients,
                    category,
                })
            }
        >
            <InView
                style={{
                    minHeight: 130,
                    minWidth: Dimensions.get("window").width / 3,
                }}
                onChange={(bol) => vis(bol)}
            >
                {view && (
                    <CardImage
                        style={{ resizeMode: "stretch" }}
                        source={{
                            uri: image,
                        }}
                    />
                )}
            </InView>

            <View>
                <TextName>{name}</TextName>
                <TextIngredients>{ingredients}</TextIngredients>
                <Button>
                    от {category === "Пицца" ? Number(price) - 300 : price} ₽
                </Button>
            </View>
        </CardContainer>
    );
};

export default Card;
