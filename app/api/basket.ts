import $api from "../axios";
import { IData } from "./interface";
import { ICardBasket } from "../../entities/CardBasket/interface";
import { IUpdateBasket, IAddBasket } from "./interface";
import axios from "axios";

export const BasketApi = {
    async deleteProduct(
        id: string,
        basketId: string
    ): Promise<IData<ICardBasket[]>> {
        const basket = await $api.delete(
            `/basket/deleteBasket?id=${id}&basketId=${basketId}`
        );
        return basket.data;
    },
    async updateProduct(data: IUpdateBasket): Promise<IData<ICardBasket[]>> {
        const res = await $api.put("/basket/updatebasket", data);
        return res.data;
    },
    async addBasket(data: IAddBasket): Promise<IData<ICardBasket[]>> {
        const res = await $api.post("/basket/addbasket", data);
        return res.data;
    },
};
