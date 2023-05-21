import { TestBed } from '@angular/core/testing';

import { NoEntityComponent } from './no-entity.component';

describe('NoEntityComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [NoEntityComponent],
    })
  );

  it('should create', () => {
    const fixture = TestBed.createComponent(NoEntityComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
