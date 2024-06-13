import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createNewCard = createAsyncThunk(
    "admin/createProduct",
    async(args)=>{
      /*   const {token} = JSON.parse(localStorage.getItem("user")); */
        try{
            const res = await fetch(`https://httpbin.org/post`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
/*                     "Authorization": `Bearer ${token}` */
                },
                body:JSON.stringify(args)
            });
            const card = await res.json();
            console.log(card);
            return card;
        }catch(err){
            console.log(err);
            return err.message;
        }
        
    }
);

export const removeProduct = createAsyncThunk(
    "admin/removeProduct",
    async(args)=>{
        const {token} = JSON.parse(localStorage.getItem("user"));
        try{
            const res = await fetch(`${process.env.BACKEND_URI}/api/admin/products`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(args)
            });
                const response = await res.json();
                return response;
        }catch(err){
        console.log(err)
        return err.message
            }
    }
)

const adminSlice = createSlice({
   name: "admin",
    initialState:{
        product: null,
        err:null
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createNewCard.pending,(state,action)=>{

        })
        .addCase(createNewCard.fulfilled,(state,action)=>{
            state.product = action.payload;
        })
        .addCase(createNewCard.rejected,(state,action)=>{

        })
        
    }
})

export default adminSlice.reducer;