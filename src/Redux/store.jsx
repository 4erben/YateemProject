import {configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import AdminSlice from "./Slices/AdminSlice";
const store = configureStore({
    reducer:{
        cart : cartReducer,
        admin: AdminSlice
    }
})

export default store;