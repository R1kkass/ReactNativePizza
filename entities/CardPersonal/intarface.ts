import { IBasket } from "@/app/services/interface";

export interface ICardPersonal {
    _id: string;
    apartament: string;
    city: string;
    house: string;
    phone: string;
    date: string;
    product: IBasket[];
    status: string;
    street: string;
    count: string;
    price: number;
    name: string;
}
