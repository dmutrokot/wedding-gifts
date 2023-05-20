import { TestBed } from '@angular/core/testing';

import { SelectedProductsComponent } from './selected-products.component';
import { ProductsService } from '../../services/products.service';

describe('SelectedProductsComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [SelectedProductsComponent],
      providers: [ProductsService],
    })
  );

  it('should create', () => {
    const fixture = TestBed.createComponent(SelectedProductsComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
