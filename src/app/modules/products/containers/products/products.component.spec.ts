import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsService } from '../../services/products.service';

import { ProductsComponent } from './products.component';
import { AllProductsComponent } from '../../components/all-products/all-products.component';
import { PurchasedProductsComponent } from '../../components/purchased-products/purchased-products.component';
import { UnpurchasedProductsComponent } from '../../components/unpurchased-products/unpurchased-products.component';
import { SelectedProductsComponent } from '../../components/selected-products/selected-products.component';
import { ProductListType } from '../../constants';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ProductsComponent,
        AllProductsComponent,
        PurchasedProductsComponent,
        SelectedProductsComponent,
        UnpurchasedProductsComponent,
      ],
      providers: [ProductsService],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#isActive should return true when the view equals activeView', () => {
    component.activeView = ProductListType.All;

    expect(component.isActive(ProductListType.All)).toBeTrue();
  });

  it('#isActive should return false when the view does not equal activeView', () => {
    component.activeView = ProductListType.All;

    expect(component.isActive(ProductListType.Purchased)).toBeFalse();
  });

  it('#onSetActiveView should change the value of activeView', () => {
    component.onSetActiveView(ProductListType.Purchased);

    expect(component.activeView).toEqual(ProductListType.Purchased);
  });
});
