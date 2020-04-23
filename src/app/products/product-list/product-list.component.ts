import { AppState } from './../state/models/AppStateExtention';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import * as ProductStateSelectors from '../state/models/ProductSelector';
import * as productActions from '../state/product.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  componentActive = true;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>,
    private productService: ProductService) { }

  ngOnInit(): void {
   this.store.pipe(select(ProductStateSelectors.getCurrentProduct)).subscribe(
      current => this.selectedProduct = current
    );


    this.errorMessage$ = this.store.pipe(select(ProductStateSelectors.getError));
    
   this.store.dispatch(new productActions.Load());
   this.store.pipe(select(ProductStateSelectors.getProducts)).subscribe(
     (products: Product[]) => this.products = products
   );

    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });

    // TODO: Unsubscribe
    this.store.pipe(select(ProductStateSelectors.getShowProductCode)).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  ngOnDestroy(): void {
    this.componentActive = false;

  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
   this.store.dispatch(new productActions.IntializeCurrentProduct());

  }

  productSelected(product: Product): void {
   this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
