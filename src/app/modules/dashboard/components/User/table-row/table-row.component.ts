import { Component, Input } from '@angular/core';
import { User } from '../../../../uikit/pages/table/model/user.model';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UserDTO } from '../../../models/userDTOS';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [FormsModule, AngularSvgIconModule, CommonModule],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent {
  @Input() user !: UserDTO;
  isDropdownOpen = false;
 constructor(){}

 ngOnInit() {}








   toggleDropdown() {
     this.isDropdownOpen = !this.isDropdownOpen;
   }

   // Métodos para manejar las opciones
   handleOption1() {
     this.isDropdownOpen = false;
   }

   handleOption2() {
     this.isDropdownOpen = false;
   }
}
