import { Injectable } from '@angular/core';

import { Product } from '../models';

import * as products from '../../../../data/products.json';

@Injectable()
export class ProductsService {
  public getProducts(): Product[] {
    return products;
  }
}
