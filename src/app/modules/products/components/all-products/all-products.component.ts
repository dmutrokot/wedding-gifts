import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  public allProducts$: BehaviorSubject<Product[]>;
  public allProductsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public areProductsLoading: boolean = false;
  public itemsPerPage: number = 8;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.allProducts$ = this.productsService.allProducts$;
    this.allProductsCount$ = this.productsService.allProductsCount$;
    this.areProductsLoading = true;

    setTimeout(() => {
      this.productsService.getAllProducts(1, this.itemsPerPage);
      this.areProductsLoading = false;
    }, 1000);
  }

  public onAddProductToSelectedList(product: Product): void {
    this.productsService.addProductToList(product);
  }

  public onPageChange(currentPage: number): void {
    this.productsService.getAllProducts(currentPage, this.itemsPerPage);
  }
}
