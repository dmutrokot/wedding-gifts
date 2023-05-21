import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BehaviorSubject } from 'rxjs';
import { SelectedProduct } from '../../models';

@Component({
  selector: 'app-purchased-products',
  templateUrl: './purchased-products.component.html',
  styleUrls: ['./purchased-products.component.scss'],
})
export class PurchasedProductsComponent implements OnInit {
  public purchasedProducts$: BehaviorSubject<SelectedProduct[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.purchasedProducts$ = this.productsService.purchasedProducts$;

    this.purchasedProducts$.subscribe((val) => console.log('purchased', val));
  }
}
