export interface IPizzas {
    name: string;
    _id: string;
    image: string;
    price: string;
    weight: string;
    category: string;
    status: string;
    ingredients: string;
}

export interface IDataPizza {
    pizzas: IPizzas[];
}

export interface ITaste {
    _id: string;
    name: string;
    price: string;
    image: string;
}

export type IData<D, K> = {
    [k: string]: D[]
}

export interface IBasket{
    _id: string;
    count: number;
    price: string;
    productId: string;
    product: IPizzas[];
}