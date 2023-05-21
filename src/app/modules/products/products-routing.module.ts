import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
