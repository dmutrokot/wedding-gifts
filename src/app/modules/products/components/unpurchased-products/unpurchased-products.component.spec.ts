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

  let mockProductsService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    const productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getUnpurchasedProducts'], {
      unpurchasedProducts$: mockProductList,
      unpurchasedProductsCount$: new BehaviorSubject<number>(2),
    });

    await TestBed.configureTestingModule({
      declarations: [UnpurchasedProductsComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UnpurchasedProductsComponent);
    component = fixture.componentInstance;

    mockProductsService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set @unpurchasedProducts$ and @unpurchasedProductsCount$ and call service method', () => {
      component.ngOnInit();

      expect(component.unpurchasedProducts$).toBe(mockProductList);
      expect(component.unpurchasedProductsCount$.value).toBe(2);
      expect(mockProductsService.getUnpurchasedProducts).toHaveBeenCalledWith(1, component.itemsPerPage);
    });
  });

  describe('#onPageChange', () => {
    it('should call service method with correct page', () => {
      const page = 2;

      component.onPageChange(page);

      expect(mockProductsService.getUnpurchasedProducts).toHaveBeenCalledWith(page, component.itemsPerPage);
    });
  });
});
