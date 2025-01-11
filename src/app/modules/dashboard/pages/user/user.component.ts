import { Component, Input, OnInit } from '@angular/core';
import { TableFooterComponent } from '../../components/User/table-footer/table-footer.component';
import { TableRowComponent } from '../../components/User/table-row/table-row.component';
import { TableActionComponent } from '../../components/User/table-action/table-action.component';
import { TableHeaderComponent } from '../../components/User/table-header/table-header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { userDTOCompleto } from '../../models/userDTOCompleto';
import { UserDTOSMALL } from '../../models/userDTOSMALL';

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
 @Input() users: UserDTOSMALL[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
    constructor(private http: HttpClient, public service:UsersService) {







    }
    getUsers() {

      this.service.GetUser().subscribe({
        next: (usuarios) => {
          this.users = usuarios;
        },
        error: (err) => {
          console.error('Error al obtener usuarios:', err);
        }
      });
    }

    get paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.users.slice(startIndex, startIndex + this.itemsPerPage);
    }

    get totalPages() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    }

    changePage(newPage: number) {
      if (newPage > 0 && newPage <= this.totalPages) {
        this.currentPage = newPage;
      }
    }
    /*public toggleUsers(checked: boolean) {
      this.users.update((users) => {
        return users.map((user) => {
          return { ...user, selected: checked };
        });
      });
    }
    filteredUsers = computed(() => {
      const search = this.filterService.searchField().toLowerCase();
      const status = this.filterService.statusField();
      const order = this.filterService.orderField();

      return this.users()
        .filter(
          (user) =>
            user.name.toLowerCase().includes(search) ||
            user.username.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search) ||
            user.phone.includes(search),
        )
        .filter((user) => {
          if (!status) return true;
          switch (status) {
            case '1':
              return user.status === 1;
            case '2':
              return user.status === 2;
            case '3':
              return user.status === 3;
            default:
              return true;
          }
        })
        .sort((a, b) => {
          const defaultNewest = !order || order === '1';
          if (defaultNewest) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          } else if (order === '2') {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
          }
          return 0;
        });
    });*/

    ngOnInit() {this.getUsers();}
}
