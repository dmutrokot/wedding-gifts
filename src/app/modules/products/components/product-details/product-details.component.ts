import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  public product: Product;
  public selectedQuantity: number = 1;
  public isProductLoading: boolean;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;

    this.isProductLoading = true;

    this.productsService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.isProductLoading = false;
    });
  }

  public onAddToCart(product: Product, selectedQuantity: number): void {
    if (selectedQuantity <= product.in_stock_quantity && selectedQuantity > 0) {
      this.productsService.addProductToList({ ...product }, selectedQuantity);
    }
  }
}
