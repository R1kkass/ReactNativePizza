import { Dimensions, FlatList, RefreshControl, Text } from "react-native";
import { BasketView  } from "./styles";
import CardBasket from "../../entities/CardBasket/CardBasket";
import { IOScrollView } from "react-native-intersection-observer";
import { useAppSelector } from "../../app/store/hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import ButtonSubmit from "../../entities/ButtonSubmit/ButtonSubmit";
import Price from "../../entities/Price/Price";
import { basketApi } from "../../app/services/BasketService";
import Notification from "../../shared/Notification/Notification";
import Loading from "../../entities/Loading/Loading";

const Basket = ({navigation}:any) => {
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);
    const {
        data: basket,
        isError,
        refetch,
        isLoading,
    } = basketApi.useGetBasketQuery(basketId || "0");
    const [updateBasket, {isLoading: isLoadUpdate}] = basketApi.useUpdateBasketMutation();
    
    useFocusEffect(
        useCallback(() => {
            return () => fn();
        }, [])
    );

    async function fn() {
        await refetch();
    }

    return (
        <SafeAreaView style={{position: 'relative'}}>
            {isLoading && <Loading/>}
            <Price data={basket}/>
            <Notification/>
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
                        id={bask._id}
                        key={bask._id}
                        priceProd={bask.price}
                        count={bask.count}
                        {...bask.product}
                    />
                ))}
            </IOScrollView>
            <BasketView onPress={()=>navigation.navigate('Подтвердить')}>
                <ButtonSubmit />
            </BasketView>
        </SafeAreaView>
    );
};

export default Basket;
