import { TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    })
  );

  it('should create', () => {
    const fixture = TestBed.createComponent(PaginationComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
