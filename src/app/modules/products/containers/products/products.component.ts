import { Component } from '@angular/core';

import { ProductListType } from '../../constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public activeView: ProductListType = ProductListType.All;
  public readonly ProductListType = ProductListType;

  public isActive(view: ProductListType): boolean {
    return this.activeView === view;
  }

  public onSetActiveView(view: ProductListType): void {
    this.activeView = view;
  }
}
