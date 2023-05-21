import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { UnpurchasedProductsComponent } from './unpurchased-products.component';
import { Product } from '../../models';

describe('UnpurchasedProductsComponent', () => {
  let component: UnpurchasedProductsComponent;
  let fixture: ComponentFixture<UnpurchasedProductsComponent>;

  const mockProductList = new BehaviorSubject<Product[]>([
    { id: 1, name: 'product1', brand: 'brand1', price: '20.00GBP', in_stock_quantity: 2 },
    { id: 2, name: 'product2', brand: 'brand2', price: '30.00GBP', in_stock_quantity: 1 },
  ]);

  beforeEach(async () => {
    const productsServiceSpy = jasmine.createSpyObj('ProductsService', [], {
      unpurchasedProducts$: mockProductList,
    });

    await TestBed.configureTestingModule({
      declarations: [UnpurchasedProductsComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UnpurchasedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set @unpurchasedProducts$', () => {
      component.ngOnInit();

      expect(component.unpurchasedProducts$).toBe(mockProductList);
    });
  });
});
