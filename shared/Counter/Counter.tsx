import { CounterText, CounterTouchable, CounterView } from "./styles";
import { FC } from "react";
import { ICounter } from "./interface";
import { useAppSelector } from "../../app/store/hooks";
import { BasketApi } from "../../app/api/basket";
import { basketApi } from "../../app/services/BasketService";
import { Touchable, TouchableOpacity } from "react-native";

const Counter: FC<ICounter> = ({ count, id }) => {
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);
    const [updateBasket, result] = basketApi.useUpdateBasketMutation();
    const [deleteBasket, results] = basketApi.useDeleteBasketMutation();

    function update(count: number) {
        if (count > 0) {
            updateBasket({
                basketId,
                id,
                count,
            });
        } else {
            deleteBasket({ id, basketId });
        }
    }

    return (
        <CounterView>
            <CounterTouchable
                onPress={() => {
                    update(count - 1);
                }}
            >
                <CounterText>-</CounterText>
            </CounterTouchable>
            <CounterText>{count}</CounterText>
            <CounterTouchable
                onPress={() => {
                    update(count + 1);
                }}
            >
                <CounterText>+</CounterText>
            </CounterTouchable>
        </CounterView>
    );
};

export default Counter;
