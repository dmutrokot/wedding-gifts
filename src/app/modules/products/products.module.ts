import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './containers/products/products.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [ProductsRoutingModule],
  providers: [ProductsService],
})
export class ProductsModule {}
