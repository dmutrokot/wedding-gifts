import { Injectable } from '@angular/core';

import * as products from '../../../../data/products.json';

@Injectable()
export class ProductsService {
  public getProducts() {
    return products;
  }
}
