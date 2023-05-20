import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { SelectedProduct } from '../../models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent implements OnInit {
  public selectedProducts$: BehaviorSubject<SelectedProduct[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.selectedProducts$ = this.productsService.selectedProducts$;
  }

  public onRemoveProductFromList(id: number): void {
    this.productsService.removeProductFromList(id);
  }
}
