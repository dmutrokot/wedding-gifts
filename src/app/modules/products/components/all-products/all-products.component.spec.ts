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
    it('should call #productsService.getProducts', fakeAsync(() => {
      const getProductsSpy = spyOn(productsService, 'getProducts').and.callThrough();

      component.ngOnInit();
      tick(1000);

      expect(getProductsSpy).toHaveBeenCalled();
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
});
