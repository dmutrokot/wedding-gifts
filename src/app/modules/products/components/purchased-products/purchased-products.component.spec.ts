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

  let mockProductsService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    const productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getPurchasedProducts'], {
      purchasedProducts$: mockProductList,
      purchasedProductsCount$: new BehaviorSubject<number>(2),
    });

    await TestBed.configureTestingModule({
      declarations: [PurchasedProductsComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasedProductsComponent);
    component = fixture.componentInstance;

    mockProductsService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set @purchasedProducts$ and @purchasedProductsCount$ and call service method', () => {
      component.ngOnInit();

      expect(component.purchasedProducts$).toBe(mockProductList);
      expect(component.purchasedProductsCount$.value).toBe(2);
      expect(mockProductsService.getPurchasedProducts).toHaveBeenCalledWith(1, component.itemsPerPage);
    });
  });

  describe('#onPageChange', () => {
    it('should call service method with correct page', () => {
      const page = 2;

      component.onPageChange(page);

      expect(mockProductsService.getPurchasedProducts).toHaveBeenCalledWith(page, component.itemsPerPage);
    });
  });
});
