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
                state.cartItems[itemIndex].cartQuantity = 1
                
            }else{
                const tempProduct = {...action.payload.card, cartQuantity: 1 ,donateMoney : 0};
                state.cartItems.push(tempProduct); 
            }
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        totalMoney:(state,action)=>{
                let {total} = state.cartItems?.reduce((cartTotal,cartItem)=>{
                const donationMoney = cartItem.donateMoney;
                cartTotal.total += donationMoney;
                return cartTotal
            },{
                total: 0
            })
            
            state.totalMoney = total;
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
        },
        setCardDonation:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>item.id === action.payload.card.id);
            state.cartItems[itemIndex].donateMoney = action.payload.donation;
        }
    }

});


export const {  addToCart ,totalMoney , removeFromCart , setCardDonation} = cartSlice.actions;
export default cartSlice.reducer;