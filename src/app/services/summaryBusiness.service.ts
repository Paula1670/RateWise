import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewsDTO } from '../modules/dashboard/models/reviewsDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryBusinessService {

constructor(private http: HttpClient) { }

GetResenasMejores() {
   const headers = new HttpHeaders({
        'Authorization': 'FTYJT',
        'Accept': 'application/json',
        'X-B3-TraceId': '1',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
      });

      return this.http.get<ReviewsDTO[]>(environment.UrlBackend + '/review/Pns2l4eNsfO8kk83dixA6A', { headers });
}

GetResenasPeores(): Observable<any>  {
  const headers = new HttpHeaders({
       'Authorization': 'FTYJT',
       'Accept': 'application/json',
       'X-B3-TraceId': '1',
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
     });

     return this.http.get<ReviewsDTO[]>(environment.UrlBackend + '/review/Pns2l4eNsfO8kk83dixA6A?showBestReviews=false ', { headers });
}

GetResenasPeoresMasDetalladas(): Observable<any>  {
  const headers = new HttpHeaders({
       'Authorization': 'FTYJT',
       'Accept': 'application/json',
       'X-B3-TraceId': '1',
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
     });

     return this.http.get<ReviewsDTO[]>(environment.UrlBackend + '/review/Pns2l4eNsfO8kk83dixA6A?showBestReviews=false&showQualityReviews=true ', { headers });
}

GetResenasPeoresMasDetalladasByText(): Observable<any>  {
  const headers = new HttpHeaders({
       'Authorization': 'FTYJT',
       'Accept': 'application/json',
       'X-B3-TraceId': '1',
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
     });

     return this.http.get<ReviewsDTO[]>(environment.UrlBackend + '/review/Pns2l4eNsfO8kk83dixA6A?showBestReviews=false&showQualityReviews=true&textLike=decide ', { headers });
}


}
