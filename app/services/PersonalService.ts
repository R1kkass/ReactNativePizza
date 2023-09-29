import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPersonal } from "./interface";
import * as SecureStore from "expo-secure-store";
import { useAppSelector } from "../store/hooks";

const token = (async ()=>{
    return await SecureStore.getItemAsync('token')
})()



export const personalApi = createApi({
    reducerPath: "personalAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://37.140.195.252:5001/api/",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    tagTypes: ["Personal"],
    endpoints: (build) => ({
        getOrder: build.query<IPersonal[], void>({
            query: () => ({
                url: `/order/getall`,
            }),
            providesTags: ["Personal"],
        }),
    })
})