import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent {
  constructor(private productsService: ProductsService) {
    console.log(this.productsService.getProducts());
  }
}
