import { IProductState } from './models/IProductState';

const intialState: IProductState = {
    showProductCode : false,
    currentProduct : null,
    products: []
}

export function reducer(state = intialState, action): IProductState{
    switch (action.type) {
        case "TOGGLE_PRODUCT_CODE":
        return {
            ...state,
            showProductCode : action.payload
        }
        default:
            return state;
    }
}