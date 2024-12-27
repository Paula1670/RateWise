import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private apiUrl = 'http://localhost:8080/business';

  constructor(private http: HttpClient) {}

  createBusiness(data: any, jwtToken: string, traceId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`,
      'Accept': 'application/json',
      'X-B3-TraceId': traceId,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, data, { headers });
  }
}

