import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableFilterService } from 'src/app/modules/uikit/pages/table/services/table-filter.service';
import { BusinessDTO } from '../../../models/businessDTO';

@Component({
  selector: 'app-BusinessAction',
  templateUrl: './BusinessAction.component.html',
  standalone:true,
  imports:[AngularSvgIconModule,CommonModule, FormsModule, ReactiveFormsModule]
})
export class BusinessActionComponent implements OnInit {
 control= new FormControl();
  @Input() bus: BusinessDTO[] = [];
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
