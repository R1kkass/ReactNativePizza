import { IPrice } from "./interface";
import { PriceText, PriceView } from "./styled";
import { FC, useMemo } from "react";

const Price: FC<IPrice> = ({ data }) => {
    const price = useMemo(() => {
        return data?.reduce((acc, product) => {
            return acc + Number(product.price);
        }, 0);
    }, [data]);

    return (
        <PriceView>
            <PriceText>Сумма заказа:</PriceText>
            <PriceText>{price || 0} ₽</PriceText>
        </PriceView>
    );
};

export default Price;
