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
  public purchasedProductsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public itemsPerPage: number = 8;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.purchasedProducts$ = this.productsService.purchasedProducts$;
    this.purchasedProductsCount$ = this.productsService.purchasedProductsCount$;

    this.productsService.getPurchasedProducts(1, this.itemsPerPage);
  }

  public onPageChange(currentPage: number): void {
    this.productsService.getPurchasedProducts(currentPage, this.itemsPerPage);
  }
}
