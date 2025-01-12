import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../modules/dashboard/models/userDTOS';
import { Pagination } from '../modules/dashboard/models/pagination';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient) { }



getUsers(offset: number, limit: number): Observable<{ users: UserDTO[]; pagination: Pagination }> {
  // Configuramos las cabeceras


  const headers = new HttpHeaders({
    'Authorization': 'FTYJT',
    'Accept': 'application/json',
    'X-B3-TraceId': '1',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/users',
  });

  // Construimos la URL con los parámetros de consulta
  const url = environment.UrlBackend +`/user?Offset=${offset}&Limit=${limit}`;

  return this.http.get<any>(url, { headers }).pipe(
    map(response => {
      const users = response.items as UserDTO[];
      const pagination: Pagination = {
        currentPage: response.currentPage,
        totalItems: response.totalItems,
        totalPages: response.totalPages,
        hasNext: response.hasNext,
      };
      return { users, pagination };
    })
  );
}
}

