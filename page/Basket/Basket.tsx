import { Dimensions, Image, RefreshControl, Text, View } from "react-native";
import { BasketImage, BasketView } from "./styles";
import CardBasket from "@/entities/CardBasket/CardBasket";
import { IOScrollView } from "react-native-intersection-observer";
import { useAppSelector } from "@/app/store/hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import ButtonSubmit from "@/entities/ButtonSubmit/ButtonSubmit";
import Price from "@/entities/Price/Price";
import { basketApi } from "@/app/services/BasketService";
import Button from "@/shared/Button/Button";
import PageError from "@/features/PageError/PageError";

const Basket = ({ navigation }: any) => {
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);
    const {
        data: basket,
        isError,
        refetch,
        isLoading,
    } = basketApi.useGetBasketQuery(basketId || "0");

    const token = useAppSelector((state) => state.storageeReducer.token);

    useFocusEffect(
        useCallback(() => {
            return () => refetch();
        }, [])
    );


    return (
        <SafeAreaView style={{ position: "relative" }}>
            <Price data={basket} />
            <IOScrollView
                refreshControl={
                    <RefreshControl
                        colors={["orangered"]}
                        refreshing={isLoading}
                        onRefresh={refetch}
                    />
                }
                style={{
                    height: Dimensions.get("window").height - 50 - 70 - 60,
                    backgroundColor: "white",
                }}
            >
                {isError && <PageError onPress={refetch} />}

                {basket?.map((bask) => (
                    <CardBasket
                        id={bask._id}
                        key={bask._id}
                        priceProd={bask.price}
                        count={bask.count}
                        {...bask.product}
                    />
                ))}
                {basket?.length === 0 && (
                    <View
                        style={{
                            height: Dimensions.get("window").height - 180,
                        }}
                    >
                        <BasketImage source={require("@/assets/Empty.png")} />
                    </View>
                )}
            </IOScrollView>

            {!!basket?.length ? (
                token ? (
                    <BasketView>
                        <ButtonSubmit
                            onPress={() => navigation.navigate("Подтвердить")}
                        />
                    </BasketView>
                ) : (
                    <BasketView>
                        <Button
                            onPress={() => navigation.navigate("Вход")}
                            large={true}
                            color={true}
                        >
                            Аторизоваться
                        </Button>
                    </BasketView>
                )
            ) : null}
        </SafeAreaView>
    );
};

export default Basket;
