import { Dimensions, FlatList, RefreshControl, Text } from "react-native";
import { pizzaApi } from "../../app/services/PizzaService";
import { BasketView, PriceText, PriceView } from "./styles";
import CardBasket from "../../entities/CardBasket/CardBasket";
import { IOScrollView } from "react-native-intersection-observer";
import { useAppSelector } from "../../app/store/hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import Button from "../../shared/Button/Button";
import ButtonSubmit from "../../entities/ButtonSubmit/ButtonSubmit";

const Basket = () => {
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);
    const {
        data: basket,
        isError,
        refetch,
        isLoading,
    } = pizzaApi.useGetBasketQuery(basketId || "0");

    useFocusEffect(
        useCallback(() => {
            return () => fn();
        }, [])
    );

    async function fn() {
        await refetch();
    }

    return (
        <SafeAreaView>
            <PriceView>
                <PriceText>Сумма заказа:</PriceText>
                <PriceText>3000</PriceText>
            </PriceView>
            <IOScrollView
                refreshControl={
                    <RefreshControl
                        colors={["orangered"]}
                        refreshing={isLoading}
                        onRefresh={() => fn()}
                    />
                }
                style={{ height: Dimensions.get('window').height-50-50-60, backgroundColor: "white" }}
            >
                {basket?.map((bask) => (
                    <CardBasket
                        refetch={refetch}
                        id={bask._id}
                        key={bask._id}
                        priceProd={bask.price}
                        count={bask.count}
                        {...bask.product}
                    />
                ))}
            </IOScrollView>
            <BasketView>
                <ButtonSubmit />
            </BasketView>
        </SafeAreaView>
    );
};

export default Basket;
