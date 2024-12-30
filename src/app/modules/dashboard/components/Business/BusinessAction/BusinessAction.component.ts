import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableFilterService } from 'src/app/modules/uikit/pages/table/services/table-filter.service';

@Component({
  selector: 'app-BusinessAction',
  templateUrl: './BusinessAction.component.html',
  standalone:true,
  imports:[AngularSvgIconModule]
})
export class BusinessActionComponent implements OnInit {

  constructor(public filterService: TableFilterService) { }

  ngOnInit() {
  }

  onSearchChange(value: Event) {
    const input = value.target as HTMLInputElement;
    this.filterService.searchField.set(input.value);
  }

  onStatusChange(value: Event) {
    const selectElement = value.target as HTMLSelectElement;
    this.filterService.statusField.set(selectElement.value);
  }

  onOrderChange(value: Event) {
    const selectElement = value.target as HTMLSelectElement;
    this.filterService.orderField.set(selectElement.value);
  }

}
