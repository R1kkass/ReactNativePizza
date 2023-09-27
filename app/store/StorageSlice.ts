import { createSlice } from "@reduxjs/toolkit";

interface IInit {
    basketId: string;
    token: string
}

const initialState: IInit = {
    basketId: "",
    token: ""
};

export const storageSlice = createSlice({
    name: "taste",
    initialState,
    reducers: {
        addToken(state, actions) {
            state.token=actions.payload;
        },
        addBasketId(state, actions) {
            state.basketId=actions.payload;
        }
    },
});

export default storageSlice.reducer;

export const { addBasketId, addToken } = storageSlice.actions;
