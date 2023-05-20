import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsService } from '../../services/products.service';

import { UnpurchasedProductsComponent } from './unpurchased-products.component';

describe('UnpurchasedProductsComponent', () => {
  let component: UnpurchasedProductsComponent;
  let fixture: ComponentFixture<UnpurchasedProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnpurchasedProductsComponent],
      providers: [ProductsService],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(UnpurchasedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
