import { DeleteButton } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IDeleteBasket } from "./interface";
import { FC } from "react";
import { useAppSelector } from "@/app/store/hooks";
import { basketApi } from "@/app/services/BasketService";

const DeleteBasket: FC<IDeleteBasket> = ({ id }) => {
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);
    const [deleteBasket] = basketApi.useDeleteBasketMutation();

    return (
        <DeleteButton onPress={() => deleteBasket({ id, basketId })}>
            <Ionicons name="close" size={30} />
        </DeleteButton>
    );
};

export default DeleteBasket;
