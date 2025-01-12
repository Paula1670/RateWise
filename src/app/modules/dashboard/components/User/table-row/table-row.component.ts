import { Component, Input } from '@angular/core';
import { User } from '../../../../uikit/pages/table/model/user.model';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UserDTO } from '../../../models/userDTOS';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';

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
 constructor(public service: UsersService){}

 ngOnInit() {}






 Delete_User(id: string) {
  console.log(id);
  if (id) {
    this.service.deleteUser(id).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        window.location.reload();
      },
      (error) => {
        console.error('Error al llamar al endpoint:', error);
        window.location.reload();
      }
    );
  }
}
}
