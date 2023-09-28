import { Dimensions, View } from "react-native";
import {
    CardContainer,
    CardImage,
    CounterView,
    TextName,
    TextPrice,
    TextSize,
} from "./styles";
import { FC, useState } from "react";
import { ICardBasket } from "./interface";
import { InView } from "react-native-intersection-observer";
import Counter from "../../shared/Counter/Counter";
import DeleteBasket from "../DeleteBasket/DeleteBasket";

const CardBasket: FC<ICardBasket> = ({
    image,
    name,
    priceProd,
    size,
    dough,
    count,
    id
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
        <CardContainer>
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
                <TextSize>
                    {size}, {dough}
                </TextSize>
                <TextPrice>{priceProd} ₽</TextPrice>
            </View>
            <CounterView>
                <Counter id={id}count={count} />
            </CounterView>
            <DeleteBasket id={id} />
        </CardContainer>
    );
};

export default CardBasket;
