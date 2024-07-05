import { createSlice } from "@reduxjs/toolkit";

const CratSlice = createSlice({
    name : "Cart",
    initialState : {
        items : [],
    },

    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            state.items.pop();
        },
        clearCartItems : (state,action) => {
            state.items.length = 0;
            // return [{items:[]}];
        },
    }
})
export const {addItem,removeItem,clearCartItems} = CratSlice.actions;
export default CratSlice.reducer;