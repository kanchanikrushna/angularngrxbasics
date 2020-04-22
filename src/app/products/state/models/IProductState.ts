import { Product } from '../../product';


export interface IProductState{
    showProductCode: boolean;
    currentProduct: Product,
    products: Product[]
}