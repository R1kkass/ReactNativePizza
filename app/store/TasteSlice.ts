import { createSlice } from "@reduxjs/toolkit";
import { ITaste } from "../services/interface";

interface IInit {
    taste: ITaste[];
}

const initialState: IInit = {
    taste: [],
};

export const tasteSlice = createSlice({
    name: "taste",
    initialState,
    reducers: {
        addTaste(state, actions) {
            state.taste.push(actions.payload);
        },
        deleteTaste(state, actions) {
            state.taste = state.taste.filter((e) => {
                return e._id !== actions.payload;
            });
        },
        initTaste(state) {
            state.taste = []
        }
    },
});

export default tasteSlice.reducer;

export const { addTaste, deleteTaste, initTaste } = tasteSlice.actions;
