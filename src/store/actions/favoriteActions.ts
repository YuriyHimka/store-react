import { AppDispatch } from "../index";
import { favoriteSlice } from "../slices/favoriteSlice";
import { IProducts } from "../../models/models";

const toggleFavorite = (product: IProducts) => {
    return (dispatch: AppDispatch) => {
        dispatch(favoriteSlice.actions.addProductToFavorite(product))
    }
}

export default toggleFavorite