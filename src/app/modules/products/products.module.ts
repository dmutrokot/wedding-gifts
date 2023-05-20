import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './containers/products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [ProductsRoutingModule],
})
export class ProductsModule {}
