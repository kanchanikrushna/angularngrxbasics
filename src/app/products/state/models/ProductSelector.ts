import { IProductState } from './IProductState';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    st => st.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    st => st.currentProduct
);


export const getProducts = createSelector(
    getProductFeatureState,
    st => st.products
);