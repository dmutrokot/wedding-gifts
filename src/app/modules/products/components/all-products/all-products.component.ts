import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, finalize, takeUntil } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit, OnDestroy {
  public allProducts: Product[] = [];
  public areProductsLoading: boolean = false;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.areProductsLoading = true;

    this.productsService
      .getProducts()
      .pipe(
        finalize(() => (this.areProductsLoading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((products) => {
        this.allProducts = products;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
