/**
 * The name "Slice" comes from splitting up Redux state objects into multiple slices of state.
 * A slice is a collection of reducer logic and actions for a single feature in the app. e.g: 
 * -> A blog might have a slice for posts and another slice for comments, you would handle the logic of 
 * -> each differently so they each get their own slice.
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        /**This is where we name our actions */
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

/**We need to export both our actions and reducers */
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;