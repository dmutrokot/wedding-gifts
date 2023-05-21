import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number;
  @Input() itemsPerPage: number = 10;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  public currentPage: number = 1;
  public totalPages: number;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
