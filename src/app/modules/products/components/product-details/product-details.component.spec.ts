import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models';

import { ProductDetailsComponent } from './product-details.component';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => '1',
    },
  },
};

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let mockProductsService: any;
  const product: Product = { id: 1, name: 'Test product', brand: 'Test brand', price: '20.00GBP', in_stock_quantity: 10 };

  beforeEach(async () => {
    mockProductsService = jasmine.createSpyObj(['getProductById', 'addProductToList']);
    mockProductsService.getProductById.and.returnValue(of(product));

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ProductsService, useValue: mockProductsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should get product details', () => {
      expect(mockProductsService.getProductById).toHaveBeenCalledWith(1);
      expect(component.product).toEqual(product);
    });
  });

  describe('#onAddToCart', () => {
    it('should add product to the list', () => {
      component.onAddToCart(product, 2);

      expect(mockProductsService.addProductToList).toHaveBeenCalledWith(product, 2);
    });

    it('should not add product to the list with invalid quantity', () => {
      component.onAddToCart(product, 0);

      expect(mockProductsService.addProductToList).not.toHaveBeenCalled();
    });
  });
});
