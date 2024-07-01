import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBanners = createAsyncThunk(
    "banners/getBanners",
    async(args ,{rejectWithValue})=>{
        try{
            const res = await fetch(`https://waqf-alyatim.com/api/images`);
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.error  || "An Error Occured")
            }
            const banners = await res.json();
            return banners;
        }catch(err){
            console.log(err);
            return err.message;
        }
    }
);


export const getLogo = createAsyncThunk(
    "banners/getLogo",
    async(args ,{rejectWithValue})=>{
        try{
            const res = await fetch(`https://waqf-alyatim.com/api/logos`);
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.error  || "An Error Occured")
            }
            const logo = await res.json();
            return logo;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.message);
        }
    }
)


const bannersSlice = createSlice({
   name: "banners",
    initialState:{
        banners: [],
        logo: null,
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
        .addCase(getLogo.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(getLogo.fulfilled,(state,action)=>{
            state.logo = action.payload;
            state.loading = false
        })
        .addCase(getLogo.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default bannersSlice.reducer;