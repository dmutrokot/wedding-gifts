import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavComponent],
    })
  );

  it('should create', () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
