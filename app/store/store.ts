import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "../services/PizzaService";
import tasteReducer from "./TasteSlice";
import storageeReducer from "./StorageSlice"
import { basketApi } from "../services/BasketService";

const rootReducer = combineReducers({
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    tasteReducer,
    storageeReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pizzaApi.middleware).concat(basketApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
