import { IPizzas } from "../../app/services/interface";

export interface ICardBasket extends IPizzas{
    size?: string
    dough?: string
    count: number
    priceProd: string
    token: string
    basketId: string
    id: string
}

