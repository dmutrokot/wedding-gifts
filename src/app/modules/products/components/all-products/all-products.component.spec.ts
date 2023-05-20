import { TestBed } from '@angular/core/testing';

import { AllProductsComponent } from './all-products.component';
import { ProductsService } from '../../services/products.service';

describe('AllProductsComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AllProductsComponent],
      providers: [ProductsService],
    })
  );

  it('should create', () => {
    const fixture = TestBed.createComponent(AllProductsComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
