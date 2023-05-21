import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { takeUntil } from 'rxjs';

import { Unsubscriber } from '@core/classes/unsubscriber';

import { ProductListType } from '../../constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends Unsubscriber implements OnInit {
  public activeView: ProductListType = ProductListType.All;
  public readonly ProductListType = ProductListType;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.activeView = params['activeView'] as ProductListType;

      if (!this.activeView) {
        this.activeView = ProductListType.All;

        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { activeView: this.activeView },
          queryParamsHandling: 'merge',
        });
      }
    });
  }

  public isActive(view: ProductListType): boolean {
    return this.activeView === view;
  }

  public onSetActiveView(view: ProductListType): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { activeView: view },
      queryParamsHandling: 'merge',
    });
  }
}
