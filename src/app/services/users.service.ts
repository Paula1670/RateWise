import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDTOCompleto } from '../modules/dashboard/models/userDTOCompleto';
import { environment } from 'src/environments/environment';
import { UserDTOSMALL } from '../modules/dashboard/models/userDTOSMALL';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient) { }


GetUser() {

  const headers = new HttpHeaders({
    'Authorization': 'FTYJT',
    'Accept': 'application/json',
    'X-B3-TraceId': '1',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/users'
  });

  // Construimos la URL con los valores de los booleanos como parámetros de consulta
  const url = `${environment.UrlBackend}/user?Offset=50&Limit=10`;

  return this.http.get<UserDTOSMALL[]>(url, { headers });
}
}
