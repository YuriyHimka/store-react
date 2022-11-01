import { IProducts } from "../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
    loading: boolean
    error: string
    products: IProducts[]
}

const initialState: ProductState = {
    loading: false,
    error: '',
    products: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },

        fetchSucces(state, action: PayloadAction<IProducts[]>) {
            state.loading = false
            state.products = action.payload
        },

        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default productSlice.reducer