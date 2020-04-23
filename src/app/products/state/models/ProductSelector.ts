import { IProductState } from './IProductState';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    st => st.showProductCode
);

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    st => st.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (st, id) => {
        if (id === 0) {
            return {
                id: 0,
                description: '',
                productCode: 'New',
                productName: '',
                starRating: 0
            }
        }

        return id ? st.products.find(x => x.id === id): null;
    }
);


export const getProducts = createSelector(
    getProductFeatureState,
    st => st.products
);

export const getError = createSelector(
    getProductFeatureState,
    st => st.error
);