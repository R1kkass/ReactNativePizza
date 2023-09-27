import { DeleteButton } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BasketApi } from "../../app/api/basket";
import { IDeleteBasket } from "./interface";
import { FC } from "react";
import { useAppSelector } from "../../app/store/hooks";

const DeleteBasket: FC<IDeleteBasket> = ({ id, refetch }) => {
    const basketId = useAppSelector((state) => state.storageeReducer.basketId);

    async function deleteBasket() {
        await BasketApi.deleteProduct(id, basketId);
        refetch()
    }

    return (
        <DeleteButton onPress={deleteBasket}>
            <Ionicons name="close" size={30} />
        </DeleteButton>
    );
};

export default DeleteBasket;
