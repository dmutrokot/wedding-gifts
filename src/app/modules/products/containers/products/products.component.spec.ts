import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { AllProductsComponent } from '../../components/all-products/all-products.component';
import { PurchasedProductsComponent } from '../../components/purchased-products/purchased-products.component';
import { UnpurchasedProductsComponent } from '../../components/unpurchased-products/unpurchased-products.component';
import { SelectedProductsComponent } from '../../components/selected-products/selected-products.component';
import { ProductListType } from '../../constants';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

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
      providers: [
        ProductsService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ activeView: ProductListType.All }),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
