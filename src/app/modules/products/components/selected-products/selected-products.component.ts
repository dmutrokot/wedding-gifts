import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, takeUntil } from 'rxjs';

import { Unsubscriber } from '@core/classes/unsubscriber';

import { ProductsService } from '../../services/products.service';
import { SelectedProduct } from '../../models';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent extends Unsubscriber implements OnInit {
  public selectedProducts$: BehaviorSubject<SelectedProduct[]>;

  constructor(private productsService: ProductsService) {
    super();
  }

  ngOnInit(): void {
    this.selectedProducts$ = this.productsService.selectedProducts$;
  }

  public onRemoveProductFromList(id: number): void {
    this.productsService.removeProductFromList(id);
  }

  public onPurchaseProducts(products: SelectedProduct[]): void {
    this.productsService
      .purchaseProducts(products)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        console.log('You have successfully bought the following products: ', products);
        window.alert('You have successfully bought the products!');
      });
  }
}
