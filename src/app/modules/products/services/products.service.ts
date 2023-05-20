import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, delay, of } from 'rxjs';

import { Product, SelectedProduct } from '../models';

import * as products from '../../../../data/products.json';

@Injectable()
export class ProductsService {
  public allProducts$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public selectedProducts$: BehaviorSubject<SelectedProduct[]> = new BehaviorSubject<SelectedProduct[]>([]);

  public getProducts(): void {
    this.allProducts$.next(Array.from(products));
  }

  public addProductToList(product: Product): void {
    const currentAllProducts: Product[] = this.allProducts$.value;
    const currentProductIndex: number = currentAllProducts.findIndex((currentProduct) => currentProduct.id === product.id);

    if (currentAllProducts[currentProductIndex].in_stock_quantity > 0) {
      currentAllProducts[currentProductIndex].in_stock_quantity -= 1;
      this.allProducts$.next(currentAllProducts);

      const currentSelectedProducts: SelectedProduct[] = this.selectedProducts$.value;
      const alreadyAddedProductIndex: number = currentSelectedProducts.findIndex((currentProduct) => currentProduct.id === product.id);

      if (alreadyAddedProductIndex === -1) {
        currentSelectedProducts.push({
          brand: product.brand,
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      } else {
        currentSelectedProducts[alreadyAddedProductIndex].quantity += 1;
      }

      this.selectedProducts$.next(currentSelectedProducts);
    }
  }

  public removeProductFromList(id: number): void {
    const currentAllProducts: Product[] = this.allProducts$.value;
    const currentProductIndex: number = currentAllProducts.findIndex((currentProduct) => currentProduct.id === id);
    currentAllProducts[currentProductIndex].in_stock_quantity += 1;
    this.allProducts$.next(currentAllProducts);

    const currentSelectedProducts: SelectedProduct[] = this.selectedProducts$.value;
    const alreadyAddedProductIndex: number = currentSelectedProducts.findIndex((currentProduct) => currentProduct.id === id);

    if (currentSelectedProducts[alreadyAddedProductIndex].quantity === 1) {
      currentSelectedProducts.splice(alreadyAddedProductIndex, 1);
    } else {
      currentSelectedProducts[alreadyAddedProductIndex].quantity -= 1;
    }

    this.selectedProducts$.next(currentSelectedProducts);
  }
}
