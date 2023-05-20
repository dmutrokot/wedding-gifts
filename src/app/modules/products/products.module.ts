import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './containers/products/products.component';
import { ProductsService } from './services/products.service';
import { AllProductsComponent } from './components/all-products/all-products.component';

@NgModule({
  declarations: [ProductsComponent, AllProductsComponent],
  imports: [ProductsRoutingModule],
  providers: [ProductsService],
})
export class ProductsModule {}
