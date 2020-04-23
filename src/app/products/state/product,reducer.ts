import { map } from 'rxjs/operators';
import { ProductActions } from './product.action';
import { IProductState } from './models/IProductState';
import { ProductActionTypes } from './models/product.actiontypes';

const intialState: IProductState = {
    showProductCode: false,
    currentProductId: null,
    products: [],
    error: ''
}

export function reducer(state = intialState, action: ProductActions): IProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            }
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductId: action.payload.id
            }
        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProductId: null
            }
        case ProductActionTypes.IntializeCurrentProduct:
            return {
                ...state,
                currentProductId: 0
            }
        case ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            }
        case ProductActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload
            }

        case ProductActionTypes.UpdateSuccess:
            const updatedProducts = state.products.map(
                item => action.payload.id === item.id ? action.payload : item
            );
            return {
                ...state,
                products: updatedProducts,
                currentProductId: action.payload.id
            }
        case ProductActionTypes.UpdateFail:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}