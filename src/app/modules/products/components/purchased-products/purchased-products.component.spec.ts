import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsService } from '../../services/products.service';

import { PurchasedProductsComponent } from './purchased-products.component';

describe('PurchasedProductsComponent', () => {
  let component: PurchasedProductsComponent;
  let fixture: ComponentFixture<PurchasedProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchasedProductsComponent],
      providers: [ProductsService],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(PurchasedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
