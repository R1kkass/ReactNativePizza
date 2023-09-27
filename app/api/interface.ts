import { IPizzas, ITaste } from "../services/interface";

export interface IData<T> {
    data: T;
}

export interface IUpdateBasket {
    id: string;
    basketId: string;
    count: number;
}

export interface IProductBasket extends IPizzas {
    addTaste?: ITaste[];
    dough?: string;
    size?: string;
}

export interface IAddBasket extends Omit<IUpdateBasket, "id"> {
    product: IProductBasket;
    price: number;
}
