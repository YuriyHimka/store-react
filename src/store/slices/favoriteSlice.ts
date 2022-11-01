import { IProducts } from "../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface favoriteState {
    favorite: IProducts[]
    favCounter: number
}

const initialState: favoriteState = {
    favorite: [],
    favCounter: 0
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {

        addProductToFavorite: (state: favoriteState, action: PayloadAction<IProducts>) => {
            const existingItem = state.favorite.find(item => item.id === action.payload.id)

            if (existingItem) {
                state.favorite = state.favorite.filter(item => item.id !== action.payload.id)
                state.favCounter <= 0 ? state.favCounter = 0 : state.favCounter -= 1
            } else {
                state.favorite.push(action.payload)
                state.favCounter += 1
            }
        }
    }
})

export default favoriteSlice.reducer