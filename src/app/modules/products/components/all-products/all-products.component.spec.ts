import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductsService } from '../../services/products.service';

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
    it('should call #getProducts', fakeAsync(() => {
      const getProductsSpy = spyOn(productsService, 'getProducts').and.callThrough();

      component.ngOnInit();
      tick(1000);

      expect(getProductsSpy).toHaveBeenCalled();
    }));
  });
});
