import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessDTO } from '../modules/dashboard/models/businessDTO';
import { Pagination } from '../modules/dashboard/models/pagination';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) {}

  createBusiness(data: BusinessDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'FTYJT',
      'Accept': 'application/json',
      'X-B3-TraceId': '1',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/createBusiness'
    });

    return this.http.post(environment.UrlBackend + '/business', data, { headers });
  }

  getBusiness(offset: number, nombre: string, ciudad:string): Observable<{ business: BusinessDTO[]; pagination: Pagination }> {
    // Configuramos las cabeceras
    const headers = new HttpHeaders({
      'Authorization': 'FTYJT',
      'Accept': 'application/json',
      'X-B3-TraceId': '1',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/business',
    });

    // Construimos la URL con los parámetros de consulta
    let url = `${environment.UrlBackend}/business?Offset=${offset}&Limit=30`;

    // Agregar filtros dinámicamente si tienen valor
    let filters: string[] = [];

    if (nombre) {
      filters.push(`name%7Ceq%7C${nombre}`);
    }

    if (ciudad) {
      filters.push(`city%7Ceq%7C${ciudad}`);
    }

    if (filters.length > 0) {
      url += `&filters=${filters.join(',')}`;
    }

    return this.http.get<any>(url, { headers }).pipe(
      map(response => {
        const business = response.items as BusinessDTO[];
        const pagination: Pagination = {
          currentPage: response.currentPage,
          totalItems: response.totalItems,
          totalPages: response.totalPages,
          hasNext: response.hasNext,
        };
        return { business, pagination };
      })
    );
  }

  deleteBusiness(id: string){
    // Configuramos las cabeceras
  console.log(id);
  
    const headers = new HttpHeaders({
      'Authorization': 'FTYJT',
      'Accept': 'application/json',
      'X-B3-TraceId': '1',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/business',
    });
  
    // Construimos la URL con los parámetros de consulta
    const url = environment.UrlBackend +`/business/${id}`;
    console.log(url);
    return this.http.delete(url, { headers });
  }
}

