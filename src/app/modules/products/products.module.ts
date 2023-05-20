import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from './services/products.service';

import { ProductsComponent } from './containers/products/products.component';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { PurchasedProductsComponent } from './components/purchased-products/purchased-products.component';

@NgModule({
  declarations: [ProductsComponent, AllProductsComponent, SelectedProductsComponent, PurchasedProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [ProductsService],
})
export class ProductsModule {}
