import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IBasket, IData, IPizzas, ITaste } from './interface'

export const pizzaApi =  createApi({
    reducerPath: 'pizzaAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://37.140.195.252:5001/api/'
    }),
    endpoints: (build)=> ({
        getAllPizzas: build.query<IData<IPizzas,string>, number>({
            query: () => ({
                url: '/pizza/getall'
            })
        }),
        getAllTaste: build.query<IData<ITaste, string>, number>({
            query: () => ({
                url: '/taste/gettaste'
            })
        }),
        getBasket: build.query<IBasket[], string>({
            query: (basketId) => ({
                url: `/basket/getbasket`,
                params: {
                    basketId
                }
            })
        })
    })
})