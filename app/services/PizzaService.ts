import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IDataPizza } from './interface'

export const pizzaApi =  createApi({
    reducerPath: 'pizzaAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://37.140.195.252:5001/api/'
    }),
    endpoints: (build)=> ({
        getAllPizzas: build.query<IDataPizza, number>({
            query: () => ({
                url: '/pizza/getall'
            })
        })
    })
})