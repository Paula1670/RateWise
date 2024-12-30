import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BusinessDTO } from '../modules/dashboard/models/businessDTO';

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

 /* createBusiness(data: any, jwtToken: string, traceId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`,
      'Accept': 'application/json',
      'X-B3-TraceId': traceId,
      'Content-Type': 'application/json'
    });

    return this.http.post(environment.UrlBackend + '/business', data, { headers });
  }*/
}

