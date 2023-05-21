import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { SelectedProduct } from '../../models';

@Component({
  selector: 'app-purchased-products',
  templateUrl: './purchased-products.component.html',
  styleUrls: ['./purchased-products.component.scss'],
})
export class PurchasedProductsComponent implements OnInit {
  public purchasedProducts$: BehaviorSubject<SelectedProduct[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.purchasedProducts$ = this.productsService.purchasedProducts$;
  }
}
