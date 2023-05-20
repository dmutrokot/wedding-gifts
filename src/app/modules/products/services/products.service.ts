import { Injectable } from '@angular/core';

import { Product } from '../models';

import * as products from '../../../../data/products.json';
import { Observable, delay, of } from 'rxjs';

@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return of(Array.from(products)).pipe(delay(1000));
  }
}
