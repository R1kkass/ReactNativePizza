import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "../services/PizzaService";
import tasteReducer from "./TasteSlice";

const rootReducer = combineReducers({
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    tasteReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pizzaApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
