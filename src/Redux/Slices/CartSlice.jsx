import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:  [],
        totalMoney : 0
},
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>item.id === action.payload.card.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                
            }else{
                const tempProduct = {...action.payload.card, cartQuantity: 1};
                state.cartItems.push(tempProduct); 
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        totalMoney:(state,action)=>{
            state.totalMoney += Number(action.payload)
        },
        removeFromCart:(state,action)=>{
            console.log(action.payload);
            const itemIndex = state.cartItems.findIndex(item=> item.id === action.payload.card.id);
            if(state.cartItems[itemIndex].cartQuantity >1 ){
                state.cartItems[itemIndex].cartQuantity -= 1
            }else{
                state.cartItems.splice(itemIndex,1);
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        }
    }

});


export const {  addToCart ,totalMoney , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;