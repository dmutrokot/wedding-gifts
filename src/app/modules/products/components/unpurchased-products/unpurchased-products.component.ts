import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-unpurchased-products',
  templateUrl: './unpurchased-products.component.html',
  styleUrls: ['./unpurchased-products.component.scss'],
})
export class UnpurchasedProductsComponent {
  public unpurchasedProducts$: BehaviorSubject<Product[]>;
  public unpurchasedProductsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public itemsPerPage: number = 8;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.unpurchasedProducts$ = this.productsService.unpurchasedProducts$;
    this.unpurchasedProductsCount$ = this.productsService.unpurchasedProductsCount$;

    this.productsService.getUnpurchasedProducts(1, this.itemsPerPage);
  }

  public onPageChange(currentPage: number): void {
    this.productsService.getUnpurchasedProducts(currentPage, this.itemsPerPage);
  }
}
