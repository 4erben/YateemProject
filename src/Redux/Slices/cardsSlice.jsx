import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    "cards/getProducts",
    async(args)=>{
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3dhcWYtYWx5YXRpbS5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTkzMzcwNDcsImV4cCI6MTcxOTM0MDY0NywibmJmIjoxNzE5MzM3MDQ3LCJqdGkiOiJqZUxkVDFINm1RT0J3RzRpIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.2yGT7jaacKGn8igLw7RryNfjyvL76JJkWlvl98MISoo";
      console.log(args);
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/projects?token=${token}`);
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message  || "An Error Occured")
            }
            const cards = await res.json();
            return cards;
        }catch(err){
            console.log(err);
            return err.message;
        }
    }
);




const cardsSlice = createSlice({
   name: "cards",
    initialState:{
        cards: null,
        err:null,
        filteredCards : [],
        category:null,
        loading:false
    },
    reducers:{
        categoryFilter: (state,action)=>{
            const fullProducts = state.cards;
            const category = action.payload.category;
            if(category === "عام"){
                state.filteredCards = state.cards;
            }else{
                state.filteredCards = fullProducts.filter(p=>{
                return p.category === category;
            })
            }
            state.category = category;
        }
    },
    extraReducers(builder){
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.cards = action.payload;
            state.filteredCards = action.payload;
            state.loading = false
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.loading = false
        })
    }
})
export const { categoryFilter} = cardsSlice.actions;
export default cardsSlice.reducer;