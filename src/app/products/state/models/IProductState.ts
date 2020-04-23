import { Product } from '../../product';


export interface IProductState{
    showProductCode: boolean;
    currentProductId: number | null,
    products: Product[],
    error: string
}