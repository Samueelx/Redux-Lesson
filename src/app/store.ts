/**
 * A container for JavaScript apps.
 * It stores the whole state of the app in an immutable object tree. The intended pattern for redux is to 
 * have a single store for your application.
 */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

/**Start and configure the store */
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;