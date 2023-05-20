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
  public areProductsLoading: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.allProducts$ = this.productsService.allProducts$;
    this.areProductsLoading = true;

    setTimeout(() => {
      this.productsService.getProducts();
      this.areProductsLoading = false;
    }, 1000);
  }

  public onAddProductToSelectedList(product: Product): void {
    this.productsService.addProductToList(product);
  }
}
