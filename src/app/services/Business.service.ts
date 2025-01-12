import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessDTO } from '../modules/dashboard/models/businessDTO';
import { Pagination } from '../modules/dashboard/models/pagination';

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
    const url = environment.UrlBackend +`/business?filters=name%7Ceq%7C${nombre}&city%7Ceq%7C${ciudad}&Offset=${offset}&Limit=30`;

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
}

