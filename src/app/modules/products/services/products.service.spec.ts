import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Product } from '../models';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
    });

    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllProducts', () => {
    it('should slice the products array based on given parameters', () => {
      service.getAllProducts(2, 2);

      service.allProducts$.subscribe((products) => {
        expect(products.length).toBe(2);
      });
    });
  });

  describe('#getProductById', () => {
    it('should return the product with the given id', (done) => {
      const id = 1;

      service.getProductById(id).subscribe((product) => {
        expect(product.id).toBe(id);
        done();
      });
    });
  });

  describe('#addProductToList', () => {
    it('should add product to selected list', () => {
      const product: Product = {
        id: 1,
        name: 'Tea pot',
        brand: 'Le Creuset',
        price: '47.00GBP',
        in_stock_quantity: 50,
      };

      service.allProducts$.next([product]);

      service.addProductToList(product);

      expect(service.allProducts$.value[0].in_stock_quantity).toEqual(49);
      expect(service.selectedProducts$.value.length).toBe(1);
      expect(service.selectedProducts$.value[0].quantity).toBe(1);
    });
  });

  describe('#removeProductFromList', () => {
    it('should remove product from selected list', () => {
      const product: Product = {
        id: 1,
        name: 'Tea pot',
        brand: 'Le Creuset',
        price: '47.00GBP',
        in_stock_quantity: 50,
      };

      service.allProducts$.next([product]);
      service.selectedProducts$.next([{ ...product, quantity: 1 }]);

      service.removeProductFromList(product.id);

      expect(service.allProducts$.value[0].in_stock_quantity).toEqual(51);
      expect(service.selectedProducts$.value.length).toBe(0);
    });
  });

  describe('#purchaseProducts', () => {
    it('should purchase selected products', (done) => {
      const selectedProduct = {
        id: 1,
        name: 'Tea pot',
        brand: 'Le Creuset',
        price: '47.00GBP',
        quantity: 1,
      };

      service.purchaseProducts([selectedProduct]).subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    });
  });
});
