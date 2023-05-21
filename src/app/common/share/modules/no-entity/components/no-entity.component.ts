import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-entity',
  templateUrl: './no-entity.component.html',
  styleUrls: ['./no-entity.component.scss'],
})
export class NoEntityComponent {
  @Input() title: string;
}
