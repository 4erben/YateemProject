import {configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import cardsSlice from "./Slices/cardsSlice";
import bannerSlice from "./Slices/bannerSlice";
import paymentSlice from "./Slices/paymentSlice";
const store = configureStore({
    reducer:{
        cart : cartReducer,
        cards: cardsSlice,
        banners: bannerSlice,
        payment: paymentSlice
    }
})

export default store;