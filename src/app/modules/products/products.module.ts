import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from '@share/modules/pagination/pagination.module';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from './services/products.service';

import { ProductsComponent } from './containers/products/products.component';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { PurchasedProductsComponent } from './components/purchased-products/purchased-products.component';
import { UnpurchasedProductsComponent } from './components/unpurchased-products/unpurchased-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    SelectedProductsComponent,
    PurchasedProductsComponent,
    UnpurchasedProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, FormsModule, ProductsRoutingModule, PaginationModule],
  providers: [ProductsService],
})
export class ProductsModule {}
