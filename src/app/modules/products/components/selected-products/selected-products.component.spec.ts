import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { SelectedProductsComponent } from './selected-products.component';
import { ProductsService } from '../../services/products.service';
import { SelectedProduct } from '../../models';

describe('SelectedProductsComponent', () => {
  let component: SelectedProductsComponent;
  let fixture: ComponentFixture<SelectedProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedProductsComponent],
      providers: [ProductsService],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(SelectedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onRemoveProductFromList', () => {
    it('should call #productsService.removeProductFromList with given @id', () => {
      const id: number = 1;
      const removeProductFromListSpy = spyOn(productsService, 'removeProductFromList').and.callFake(() => {});

      component.onRemoveProductFromList(id);

      expect(removeProductFromListSpy).toHaveBeenCalledWith(id);
    });
  });

  describe('#onPurchaseProducts', () => {
    const mockProducts: SelectedProduct[] = [
      {
        id: 1,
        name: 'Tea pot',
        brand: 'Le Creuset',
        price: '47.00GBP',
        quantity: 2,
      },
    ];

    it('should call #productsService.purchaseProducts with given @products', () => {
      const purchaseProductsSpy = spyOn(productsService, 'purchaseProducts').and.returnValue(of(true));

      component.onPurchaseProducts(mockProducts);

      expect(purchaseProductsSpy).toHaveBeenCalledWith(mockProducts);
    });

    it('should show an alert', () => {
      const alertSpy = spyOn(window, 'alert');

      component.onPurchaseProducts(mockProducts);

      expect(alertSpy).toHaveBeenCalledWith('You have successfully bought the products!');
    });

    it('should log to console', () => {
      const logSpy = spyOn(console, 'log');

      component.onPurchaseProducts(mockProducts);

      expect(logSpy).toHaveBeenCalledWith('You have successfully bought the following products: ', mockProducts);
    });
  });
});
