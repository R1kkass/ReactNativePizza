import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPersonal } from "./interface";



export const personalApi = createApi({
    reducerPath: "personalAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://37.140.195.252:5001/api/",
        
    }),
    tagTypes: ["Personal"],
    endpoints: (build) => ({
        getOrder: build.query<IPersonal[], string>({
            query: (token) => ({
                url: `/order/getall`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            providesTags: ["Personal"],
        }),
    })
})