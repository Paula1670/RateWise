import { Component, Input, OnInit } from '@angular/core';
import { TableFooterComponent } from '../../components/User/table-footer/table-footer.component';
import { TableRowComponent } from '../../components/User/table-row/table-row.component';
import { TableActionComponent } from '../../components/User/table-action/table-action.component';
import { TableHeaderComponent } from '../../components/User/table-header/table-header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormControl, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { UserDTO } from '../../models/userDTOS';
import { Pagination } from '../../models/pagination';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone:true,
  imports:[    AngularSvgIconModule,
      FormsModule,
      TableHeaderComponent,
      TableFooterComponent,
      TableRowComponent,
      TableActionComponent,]
})
export class UserComponent implements OnInit {
 @Input() users: UserDTO[] = [];
  control= new FormControl();
  paginatedUsers: UserDTO[] = [];
  pagination: Pagination = {
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    hasNext: false,
  };
  itemsPerPage: number = 10;
  currentPage: number = 1;
    constructor(private http: HttpClient, public service:UsersService) {

    }

//filtros
onOrderChange() {
 this.control.valueChanges.subscribe(query => {
  this.getUsers();
  });
}

getUsers(): void {
  const offset = this.currentPage - 1;
  console.log('Offset calculado:', offset);

  this.service.getUsers(offset, this.itemsPerPage).subscribe({
    next: (data) => {
      this.paginatedUsers = data.users; // Asigna los usuarios devueltos directamente
      this.pagination = data.pagination;
      console.log('Usuarios obtenidos:', this.paginatedUsers); // Verifica que los usuarios se asignen correctamente
    },
    error: (err) => {
      console.error('Error al obtener usuarios:', err);
    },
  });
}


    

    //Paginación
    changePage(newPage: number): void {
      if (newPage > 0 && newPage <= this.pagination.totalPages) {
        this.currentPage = newPage;
        this.getUsers();
      }
    }

    onItemsPerPageChange(event: Event): void {

      const selectedValue = (event.target as HTMLSelectElement).value;
      this.itemsPerPage = parseInt(selectedValue, 10);
      this.currentPage = 1;
      this.getUsers();


    }
    ngOnInit() {this.getUsers();}
}
