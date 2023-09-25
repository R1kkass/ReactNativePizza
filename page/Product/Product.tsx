import { Image } from "react-native";
import { FC, useState, useEffect } from "react";
import { IProduct } from "./interface";
import {
    ButtonView,
    NameProduct,
    ProductScroll,
    TasteText,
    WeightText,
} from "./styles";
import Button from "../../shared/Button/Button";
import TasteList from "../../entities/TasteList/TasteList";
import Size from "../../entities/Size/Size";
import Taste from "../../entities/Taste/Taste";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { initTaste } from "../../app/store/TasteSlice";

const Product: FC<IProduct> = ({ route }) => {
    const { image, name, price, ingredients, category, weight } = route.params;

    const [proPrice, setProPrice] = useState(Number(price));
    const [size, setSize] = useState("Средняя");
    const [type, setType] = useState("Традиционное");
    let priceTaste = 0;

    const dispatch = useAppDispatch();
    const taste = useAppSelector((state) => state.tasteReducer.taste);

    function productPrice(price: number, name: string) {
        setProPrice(price);
        setSize(name);
    }

    useEffect(() => {
        dispatch(initTaste());
    }, []);

    useEffect(() => {
        priceTaste = taste?.reduce((acc, e) => {
            return Number(e.price) + acc;
        }, 0) + proPrice - priceTaste;
        setProPrice(priceTaste);
    }, [taste]);

    return (
        <>
            <ProductScroll>
                <Image
                    style={{ minHeight: 400, width: "100%" }}
                    source={{
                        uri: image,
                    }}
                />
                <NameProduct>{name}</NameProduct>
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
            </ProductScroll>
            <ButtonView>
                <Button large={true} color={true}>
                    Добавить в корзину {proPrice}₽
                </Button>
            </ButtonView>
        </>
    );
};

export default Product;
