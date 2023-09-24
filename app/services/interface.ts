export interface IPizzas{
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
    pizzas: IPizzas[]
}