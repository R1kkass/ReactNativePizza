import { Text } from "react-native";
import { CardPersonalContainer, CardPersonalView, TextProduct } from "./styles";
import { FC, useMemo } from "react";
import { IPersonal } from "@/app/services/interface";
import dayjs from "dayjs";

const CardPersonal: FC<IPersonal> = ({
    name,
    apartament,
    city,
    _id,
    street,
    price,
    count,
    product,
    status,
    date,
}) => {
    const order = useMemo(() => {
        return product.reduce((acc, prod, index) => {
            return (
                acc +
                prod?.product?.name +
                (index + 1 === product.length ? "" : ", ")
            );
        }, "");
    }, []);

    return (
        <CardPersonalContainer>
            <CardPersonalView>
                <Text>id заказа: {_id}</Text>
                <Text>
                    Дата: {dayjs(Number(date)).format("DD.MM.YY HH:mm")}
                </Text>
                <Text>Статус: {status}</Text>
                <Text>Цена: {price} ₽</Text>
                <TextProduct>
                    Товары:{" "}
                    {order.length > 50 ? order.slice(0, 90) + "..." : order}
                </TextProduct>
            </CardPersonalView>
        </CardPersonalContainer>
    );
};

export default CardPersonal;
