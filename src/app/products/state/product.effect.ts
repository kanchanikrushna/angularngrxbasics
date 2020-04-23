import { ProductService } from './../product.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import *  as productActions from './product.action';
import { ProductActionTypes } from './models/product.actiontypes';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
    /**
     *
     */
    constructor(private actions$: Actions,
        private productService: ProductService) {

    }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(ProductActionTypes.Load),
        mergeMap(
            (action: productActions.Load) => this.productService.getProducts()
                .pipe(
                    map((products: Product[]) => new productActions.LoadSuccess(products)),
                    catchError(err => of(new productActions.LoadFail(err)))
                )));

    @Effect()
    updateProducts$ = this.actions$.pipe(
        ofType(ProductActionTypes.UpdateProduct),
        map((action: productActions.UpdateProduct) => action.payload),
        mergeMap(
            (product: Product) => this.productService.updateProduct(product)
                .pipe(
                    map((products: Product) => new productActions.UpdateSuccess(products)),
                    catchError(err => of(new productActions.UpdateFail(err)))
                )));

}