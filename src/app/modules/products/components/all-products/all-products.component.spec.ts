import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductsService } from '../../services/products.service';

import { AllProductsComponent } from './all-products.component';
import { Product } from '../../models';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProductsComponent],
      providers: [ProductsService],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call #productsService.getAllProducts and manage loading state', fakeAsync(() => {
      const getProductsSpy = spyOn(productsService, 'getAllProducts').and.callThrough();

      component.ngOnInit();

      expect(component.areProductsLoading).toBeTruthy();

      tick(1000);

      expect(getProductsSpy).toHaveBeenCalled();
      expect(component.areProductsLoading).toBeFalsy();
    }));
  });

  describe('#onAddProductToSelectedList', () => {
    it('should call #productsService.addProductToList with given @product', () => {
      const product: Product = {
        id: 1,
        name: 'Tea pot',
        brand: 'Le Creuset',
        price: '47.00GBP',
        in_stock_quantity: 50,
      };
      const addProductToListSpy = spyOn(productsService, 'addProductToList').and.callFake(() => {});

      component.onAddProductToSelectedList(product);

      expect(addProductToListSpy).toHaveBeenCalledWith(product);
    });
  });

  describe('#onPageChange', () => {
    it('should call service method with correct page', () => {
      const page = 2;
      const getAllProductsSpy = spyOn(productsService, 'getAllProducts').and.callFake(() => {});

      component.onPageChange(page);

      expect(getAllProductsSpy).toHaveBeenCalledWith(page, component.itemsPerPage);
    });
  });
});
