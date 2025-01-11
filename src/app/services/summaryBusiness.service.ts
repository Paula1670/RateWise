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

GetResenasMejores(mejoresResenas: boolean, resenasMasCalidad: boolean, texto: string) {

  const headers = new HttpHeaders({
    'Authorization': 'FTYJT',
    'Accept': 'application/json',
    'X-B3-TraceId': '1',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
  });

  // Construimos la URL con los valores de los booleanos como parámetros de consulta
  const url = `${environment.UrlBackend}/review/Pns2l4eNsfO8kk83dixA6A?showBestReviews=${mejoresResenas}&showQualityReviews=${resenasMasCalidad}&textLike=${texto}`;

  return this.http.get<ReviewsDTO[]>(url, { headers });
}




    // return this.http.get<ReviewsDTO[]>(environment.UrlBackend + '/review/Pns2l4eNsfO8kk83dixA6A?showBestReviews=false&showQualityReviews=true&textLike=decide ', { headers });



}
