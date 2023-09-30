import {
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { FC, useState, useEffect } from "react";
import { IProduct } from "./interface";
import {
    ButtonView,
    ContainerView,
    NameProduct,
    ProductScroll,
    TasteText,
    WeightText,
} from "./styles";
import Button from "@/shared/Button/Button";
import TasteList from "@/entities/TasteList/TasteList";
import Size from "@/entities/Size/Size";
import Taste from "@/entities/Taste/Taste";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { initTaste } from "@/app/store/TasteSlice";
import { IProductBasket } from "@/app/api/interface";
import { basketApi } from "@/app/services/BasketService";
import NotificationProduct from "@/entities/NotificationProduct/NotificationProduct";
import NotificationError from "@/entities/NotificationError/NotificationError";
import Loading from "@/entities/Loading/Loading";

const Product: FC<IProduct> = ({ route }) => {
    const { image, name, price, ingredients, category, weight, _id } =
        route.params;

    const [proPrice, setProPrice] = useState(Number(price));
    const [size, setSize] = useState("Средняя");
    const [type, setType] = useState("Традиционное");
    const [priceSize, setPriceSize] = useState(0);

    const dispatch = useAppDispatch();
    const taste = useAppSelector((state) => state.tasteReducer.taste);
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);

    const [addBasketRedux, { isSuccess, isError, isLoading }] =
        basketApi.useAddBasketMutation();

    function productPrice(price: number, name: string) {
        setPriceSize(price);
        setSize(name);
    }

    useEffect(() => {
        dispatch(initTaste());
    }, []);

    useEffect(() => {
        setProPrice(
            taste?.reduce((acc, e) => {
                return Number(e.price) + acc;
            }, 0) +
                Number(price) +
                priceSize
        );
    }, [taste, priceSize]);

    async function addBasket() {
        let product: IProductBasket = route.params;
        product.addTaste = taste;

        if (category === "Пицца") {
            product.size = size;
            product.dough = type;
        }

        addBasketRedux({
            basketId,
            count: 1,
            product,
            price: proPrice,
        });
    }

    return (
        <>
            {isSuccess && <NotificationProduct />}
            {isError && <NotificationError />}
            {isLoading && <Loading />}
            <ProductScroll>
                <Image
                    style={{
                        height: 400,
                        width: "100%",
                        marginLeft: 0,
                        right: -8,
                    }}
                    source={{
                        uri: image,
                    }}
                />
                <ContainerView>
                    <NameProduct onPress={addBasket}>{name}</NameProduct>
                    <WeightText>
                        {weight} {category == "Пицца" && `, ${size}, ${type}`}
                    </WeightText>
                    <TasteText>{ingredients}</TasteText>
                    {category === "Пицца" && (
                        <>
                            <Size price={price} callback={productPrice} />
                            <Taste callback={(e) => setType(e)} />
                            <TasteList />
                        </>
                    )}
                </ContainerView>
            </ProductScroll>
            <ButtonView>
                <Button onPress={addBasket} large={true} color={true}>
                    Добавить в корзину {proPrice}₽
                </Button>
            </ButtonView>
        </>
    );
};

export default Product;
