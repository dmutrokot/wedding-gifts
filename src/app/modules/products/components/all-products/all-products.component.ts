import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  constructor(private productsService: ProductsService) {
    console.log(this.productsService.getProducts());
  }
}
