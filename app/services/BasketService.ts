import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBasket, IData, IDeleteBasket, IPizzas, ISubmit, ISubmitBody, ITaste } from "./interface";
import { IAddBasket, IUpdateBasket } from "../api/interface";

export const basketApi = createApi({
    reducerPath: "basketAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://37.140.195.252:5001/api/",
    }),
    tagTypes: ["Basket"],
    endpoints: (build) => ({
        getBasket: build.query<IBasket[], string>({
            query: (basketId) => ({
                url: `/basket/getbasket`,
                params: {
                    basketId,
                },
            }),
            providesTags: ["Basket"],
        }),
        updateBasket: build.mutation<IBasket[], IUpdateBasket>({
            query: (body) => ({
                url: "/basket/updatebasket",
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Basket"],
        }),
        deleteBasket: build.mutation<IBasket[], IDeleteBasket>({
            query: (body) => ({
                url: `/basket/deleteBasket?id=${body.id}&basketId=${body.basketId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Basket"],
        }),
        addBasket: build.mutation<IBasket[], IAddBasket>({
            query: (body) => ({
                url: "/basket/addbasket",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Basket"],
        }),
        sendBasket: build.mutation<IBasket[], ISubmitBody>({
            query: (body)=>({
                url: '/order/addorder',
                method: 'POST',
                body: {
                    name: body.name,
                    city: body.city,
                    street: body.street,
                    product: body.product,
                    apartment: body?.apartment,
                    price: body?.price,
                    house: body.house,
                    count: body.count,
                    date: body.date,
                    phone: body.phone
                },
                headers:{
                    Authorization: `Bearer ${body.token}`
                }
            })
        })
    }),
});
