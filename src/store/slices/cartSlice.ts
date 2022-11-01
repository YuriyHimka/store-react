import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../models/models";

interface cartState {
    cart: IProducts[]
    cartCounter: number
}

const initialState: cartState = {
    cart: [],
    cartCounter: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementCounter: (state: cartState) => {
            state.cartCounter += 1
        },

        addProductToCart: (state: cartState, action: PayloadAction<IProducts>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id)
            existingItem ?
                existingItem.quantity++ :
                state.cart.push(action.payload)
        },

        removeProductFromCart: (state: cartState, action: PayloadAction<IProducts>) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id)

            if (cartItem) {
                state.cartCounter <= 0 ? state.cartCounter = 0 : state.cartCounter -= 1
                if (cartItem.quantity === 1) {
                    cartItem.quantity = 1
                    state.cart = state.cart.filter(item => item.id !== action.payload.id)
                } else { cartItem.quantity -- }
            }
        },

        clearCart: (state: cartState, action: PayloadAction<IProducts>) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id)
            if (cartItem) {
                state.cart = state.cart.filter(item => item.id !== action.payload.id)
                state.cartCounter -= cartItem.quantity
                cartItem.quantity = 1
            }
        }

    }
})

export default cartSlice.reducer