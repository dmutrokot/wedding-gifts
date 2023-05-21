import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { PurchasedProductsComponent } from './purchased-products.component';
import { SelectedProduct } from '../../models';

describe('PurchasedProductsComponent', () => {
  let component: PurchasedProductsComponent;
  let fixture: ComponentFixture<PurchasedProductsComponent>;

  const mockProductList = new BehaviorSubject<SelectedProduct[]>([
    { id: 1, name: 'product1', brand: 'brand1', price: '20.00GBP', quantity: 2 },
    { id: 2, name: 'product2', brand: 'brand2', price: '30.00GBP', quantity: 1 },
  ]);

  beforeEach(async () => {
    const productsServiceSpy = jasmine.createSpyObj('ProductsService', [], {
      purchasedProducts$: mockProductList,
    });

    await TestBed.configureTestingModule({
      declarations: [PurchasedProductsComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set @purchasedProducts$', () => {
      component.ngOnInit();

      expect(component.purchasedProducts$).toBe(mockProductList);
    });
  });
});
