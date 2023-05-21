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

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.unpurchasedProducts$ = this.productsService.unpurchasedProducts$;

    this.unpurchasedProducts$.subscribe((val) => console.log('unpurchased', val));
  }
}
