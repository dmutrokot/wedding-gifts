import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductsComponent],
    })
  );

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
