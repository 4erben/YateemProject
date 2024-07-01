import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCards = createAsyncThunk(
    "cards/getCards",
    async(args)=>{
        try{
            const res = await fetch(`https://waqf-alyatim.com/api/projects`);
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
        cards: [],
        err:null,
        filteredCards : [],
        category:null,
        loading:false
    },
    reducers:{
        categoryFilter: (state,action)=>{
            const fullCards = state.cards;
            const category = action.payload.category;
            if(category === "عام"){
                state.filteredCards = state.cards;
            }else{
                state.filteredCards = fullCards.filter(p=>{
                return p.category === category;
            })
            }
            state.category = category;
        }
    },
    extraReducers(builder){
        builder
        .addCase(getCards.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(getCards.fulfilled,(state,action)=>{
            state.cards = action.payload;
            state.filteredCards = action.payload;
            state.loading = false
        })
        .addCase(getCards.rejected,(state,action)=>{
            state.loading = false
        })
    }
})
export const { categoryFilter} = cardsSlice.actions;
export default cardsSlice.reducer;