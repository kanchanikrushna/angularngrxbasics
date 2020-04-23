import { Product } from './../product';
import { ProductActionTypes } from './models/product.actiontypes';
import { Action } from '@ngrx/store';

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) {
    }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) {
    }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class IntializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.IntializeCurrentProduct; 
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load; 
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess; 
    constructor(public payload: Product[]) {
        
    }
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail; 
    constructor(public payload: string) {
        
    }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct; 
    constructor(public payload: Product) {
        
    }
}

export class UpdateSuccess implements Action {
    readonly type = ProductActionTypes.UpdateSuccess; 
    constructor(public payload: Product) {
        
    }
}

export class UpdateFail implements Action {
    readonly type = ProductActionTypes.UpdateFail; 
    constructor(public payload: string) {
        
    }
}


export type ProductActions  =  ToggleProductCode 
                                | SetCurrentProduct
                                | ClearCurrentProduct 
                                | IntializeCurrentProduct
                                | Load 
                                | LoadFail
                                | LoadSuccess
                                | UpdateProduct
                                | UpdateSuccess
                                | UpdateFail;