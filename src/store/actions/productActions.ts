import axios from "../services/axios";
import { AppDispatch } from "../index";
import { productSlice } from "../slices/productSlice";

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await axios.get('')
            dispatch(productSlice.actions.fetchSucces(
                response.data
            ))

        } catch(e) {
            dispatch(productSlice.actions.fetchError(e as Error))
        }
    }
}