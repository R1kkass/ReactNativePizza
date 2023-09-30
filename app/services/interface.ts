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
    [k: string]: D[];
};

export interface IBasket {
    _id: string;
    count: number;
    price: string;
    productId: string;
    product: IPizzas[];
}

export interface IDeleteBasket {
    id: string;
    basketId: string | number;
}

export interface IPersonal {
    userId: string;
    _id: string;
    product: IBasket[];
}

export interface ISubmit {
    city: string;
    name: string;
    apartament?: string;
    product: IBasket[];
    price: string | number;
    phone: string;
    count: number;
    date: number;
}

export interface ISubmitBody extends ISubmit{
    token: string
}