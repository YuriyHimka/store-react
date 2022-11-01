import { cartSlice } from "../slices/cartSlice";
import { AppDispatch } from "../index";
import { IProducts } from "../../models/models";

export const AddToCart = (product: IProducts) => {
    return (dispatch: AppDispatch) => {
        dispatch(cartSlice.actions.incrementCounter())
        dispatch(cartSlice.actions.addProductToCart(product))
    }
}

export const RemoveFromCart = (product: IProducts) => {
    return (dispatch: AppDispatch) => {
        dispatch(cartSlice.actions.removeProductFromCart(product))
    }
}

export const ClearCart = (product: IProducts) => {
    return (dispatch: AppDispatch) => {
        dispatch(cartSlice.actions.clearCart(product))
    }
}