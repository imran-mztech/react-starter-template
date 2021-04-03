import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, { payload }) => {
            state.push(payload)
        }
    }
})


export const productReducer = productSlice.reducer

export const {
    addProduct
} = productSlice.actions