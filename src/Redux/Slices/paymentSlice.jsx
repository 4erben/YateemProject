import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postPayment = createAsyncThunk(
    "payment/postPayment",
    async(args)=>{
        try{
            console.log(args);
            const jsonData = JSON.stringify(args);
            // Create a FormData object
            const formData = new FormData();
            formData.append('jsonData', jsonData);
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/payment`,{
                method:"POST",
                body: JSON.stringify(args)
            });
            console.log(res);
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message  || "An Error Occured")
            }
            const response = await res.json();
            return response;
        }catch(err){
            console.log(err);
            return err.message;
        }
    }
);




const paymentSlice = createSlice({
   name: "payment",
    initialState:{
        cards: [],
        err:null,
        filteredCards : [],
        category:null,
        loading:false
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(postPayment.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(postPayment.fulfilled,(state,action)=>{
            state.loading = false
        })
        .addCase(postPayment.rejected,(state,action)=>{
            state.loading = false
        })
    }
})
/* export const { categoryFilter} = cardsSlice.actions; */
export default paymentSlice.reducer;