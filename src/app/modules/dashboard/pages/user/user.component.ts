import { Component, OnInit } from '@angular/core';
import { TableFooterComponent } from '../../components/User/table-footer/table-footer.component';
import { TableRowComponent } from '../../components/User/table-row/table-row.component';
import { TableActionComponent } from '../../components/User/table-action/table-action.component';
import { TableHeaderComponent } from '../../components/User/table-header/table-header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TableFilterService } from 'src/app/modules/uikit/pages/table/services/table-filter.service';
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

  users:Array<UserDTOSMALL >;
    constructor(private http: HttpClient) {



     this.users = [
      {
        user_id: "1",
        name: "Juan Perez",
        review_count: 34,
        yelping_since: new Date("2020-05-15"),
        friendsNumber: 10,
        votes: 45,
        fans: 3,
        average_stars: 4.5,
        compliments: 12,
        selected: false
      },
      {
        user_id: "2",
        name: "Maria Lopez",
        review_count: 50,
        yelping_since: new Date("2019-03-12"),
        friendsNumber: 25,
        votes: 60,
        fans: 8,
        average_stars: 4.8,
        compliments: 20,
        selected: false
      },
      {
        user_id: "3",
        name: "Carlos Sanchez",
        review_count: 15,
        yelping_since: new Date("2021-01-25"),
        friendsNumber: 5,
        votes: 18,
        fans: 1,
        average_stars: 3.9,
        compliments: 4,
        selected: false
      },
      {
        user_id: "4",
        name: "Ana Morales",
        review_count: 70,
        yelping_since: new Date("2018-06-30"),
        friendsNumber: 40,
        votes: 95,
        fans: 15,
        average_stars: 4.7,
        compliments: 35,
        selected: false
      },
      {
        user_id: "5",
        name: "Luis Rodriguez",
        review_count: 20,
        yelping_since: new Date("2022-09-10"),
        friendsNumber: 8,
        votes: 22,
        fans: 2,
        average_stars: 4.2,
        compliments: 6,
        selected: false
      },
      {
        user_id: "6",
        name: "Elena Garcia",
        review_count: 100,
        yelping_since: new Date("2015-11-20"),
        friendsNumber: 70,
        votes: 150,
        fans: 30,
        average_stars: 4.9,
        compliments: 50,
        selected: false
      },
      {
        user_id: "7",
        name: "Pedro Martinez",
        review_count: 40,
        yelping_since: new Date("2019-08-14"),
        friendsNumber: 20,
        votes: 55,
        fans: 6,
        average_stars: 4.3,
        compliments: 18,
        selected: false
      },
      {
        user_id: "8",
        name: "Sofia Torres",
        review_count: 90,
        yelping_since: new Date("2017-02-11"),
        friendsNumber: 50,
        votes: 120,
        fans: 25,
        average_stars: 4.6,
        compliments: 40,
        selected: false
      },
      {
        user_id: "9",
        name: "Diego Herrera",
        review_count: 60,
        yelping_since: new Date("2020-10-05"),
        friendsNumber: 35,
        votes: 80,
        fans: 12,
        average_stars: 4.4,
        compliments: 22,
        selected: false
      },
      {
        user_id: "10",
        name: "Lucia Vargas",
        review_count: 12,
        yelping_since: new Date("2021-12-18"),
        friendsNumber: 4,
        votes: 10,
        fans: 0,
        average_stars: 3.8,
        compliments: 3,
        selected: false
      },
      {
        user_id: "11",
        name: "Miguel Ortega",
        review_count: 80,
        yelping_since: new Date("2016-03-03"),
        friendsNumber: 60,
        votes: 110,
        fans: 20,
        average_stars: 4.7,
        compliments: 33,
        selected: false
      },
      {
        user_id: "12",
        name: "Valeria Jimenez",
        review_count: 5,
        yelping_since: new Date("2023-07-22"),
        friendsNumber: 2,
        votes: 5,
        fans: 0,
        average_stars: 4.0,
        compliments: 1,
        selected: false
      },
  ];



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

    ngOnInit() {}
}
