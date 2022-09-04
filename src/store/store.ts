import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import formSlice from "./FormSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        items: itemsSlice,
        form: formSlice,
        cart: cartSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;