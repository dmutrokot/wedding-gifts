import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsComponent } from './selected-products.component';
import { ProductsService } from '../../services/products.service';

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
});
