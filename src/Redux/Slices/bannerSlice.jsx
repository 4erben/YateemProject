import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBanners = createAsyncThunk(
    "banners/getBanners",
    async(args)=>{
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/logos`);
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message  || "An Error Occured")
            }
            const banners = await res.json();
            return banners;
        }catch(err){
            console.log(err);
            return err.message;
        }
    }
);





const bannersSlice = createSlice({
   name: "banners",
    initialState:{
        banners: [],
        err:null,
        loading:false

    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getBanners.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(getBanners.fulfilled,(state,action)=>{
            state.banners = action.payload;
            state.loading = false
        })
        .addCase(getBanners.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default bannersSlice.reducer;