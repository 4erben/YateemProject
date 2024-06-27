import {configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import AdminSlice from "./Slices/AdminSlice";
import cardsSlice from "./Slices/cardsSlice";
import bannerSlice from "./Slices/bannerSlice";
const store = configureStore({
    reducer:{
        cart : cartReducer,
        admin: AdminSlice,
        cards: cardsSlice,
        banners: bannerSlice
    }
})

export default store;