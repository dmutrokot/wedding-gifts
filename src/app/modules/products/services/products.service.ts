import { Injectable } from '@angular/core';

import { BehaviorSubject, EMPTY, Observable, delay, of } from 'rxjs';

import { Product, SelectedProduct } from '../models';

import * as products from '../../../../data/products.json';

@Injectable()
export class ProductsService {
  public allProducts$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public selectedProducts$: BehaviorSubject<SelectedProduct[]> = new BehaviorSubject<SelectedProduct[]>([]);
  public purchasedProducts$: BehaviorSubject<SelectedProduct[]> = new BehaviorSubject<SelectedProduct[]>([]);
  public unpurchasedProducts$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(Array.from(products));

  public getProducts(): void {
    this.allProducts$.next(Array.from(products));
  }

  public getProductById(id: number): Observable<Product> {
    const product: Product | undefined = Array.from(products).find((product) => product.id === id)!;

    return of(product).pipe(delay(1000));
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

  public purchaseProducts(products: SelectedProduct[]): Observable<boolean> {
    this.updatePurchasedProducts(products);

    this.updateUnpurchasedProducts();

    this.selectedProducts$.next([]);

    return of(true);
  }

  private updatePurchasedProducts(products: SelectedProduct[]): void {
    const currentPurchasedProducts: SelectedProduct[] = this.purchasedProducts$.value;
    const newPurchasedProducts: SelectedProduct[] = [...currentPurchasedProducts, ...products];

    const aggregatedProducts: SelectedProduct[] = newPurchasedProducts.reduce((acc, product) => {
      const existingProduct: SelectedProduct | undefined = acc.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        acc.push({ ...product });
      }

      return acc;
    }, [] as SelectedProduct[]);

    this.purchasedProducts$.next(aggregatedProducts);
  }

  private updateUnpurchasedProducts(): void {
    const purchasedProductIds: number[] = this.purchasedProducts$.value.map((p) => p.id);
    const unpurchasedProducts: Product[] = this.allProducts$.value.filter((product) => !purchasedProductIds.includes(product.id));

    this.unpurchasedProducts$.next(unpurchasedProducts);
  }
}
