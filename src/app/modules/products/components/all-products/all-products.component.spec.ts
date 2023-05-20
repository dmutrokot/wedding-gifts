import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';

import { AllProductsComponent } from './all-products.component';

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
    it('should call #getProducts', () => {
      const mockProducts: Product[] = [];
      spyOn(productsService, 'getProducts').and.returnValue(of(mockProducts));

      component.ngOnInit();

      expect(productsService.getProducts).toHaveBeenCalled();
    });

    it('should set @allProducts', () => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Tea pot',
          brand: 'Le Creuset',
          price: '47.00GBP',
          in_stock_quantity: 50,
        },
      ];
      spyOn(productsService, 'getProducts').and.returnValue(of(mockProducts));

      component.ngOnInit();

      expect(component.allProducts).toEqual(mockProducts);
    });
  });
});
