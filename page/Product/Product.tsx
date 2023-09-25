import { ScrollView, Image, Text } from "react-native";
import { FC, useState } from "react";
import { IProduct } from "./interface";
import { ButtonView, NameProduct, ProductScroll, TasteText, WeightText } from "./styles";
import Button from "../../shared/Button/Button";
import TasteList from "../../entities/TasteList/TasteList";
import Size from "../../entities/Size/Size";
import Taste from "../../entities/Taste/Taste";

const Product: FC<IProduct> = ({ route }) => {
    const { image, name, price, ingredients, category, weight } = route.params;

    const [proPrice, setProPrice] = useState(Number(price))
    const [size, setSize] = useState("Средняя")


    function productPrice(price: number, name: string) {
        setProPrice(price)
        setSize(name)
    }

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
                <WeightText>{weight}, {category=="Пицца" && size}</WeightText>
                <TasteText>{ingredients}</TasteText>
                {category === "Пицца" && (
                    <>
                        <Size price={price} callback={productPrice}/>
                        <Taste />
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
