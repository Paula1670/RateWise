import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewsDTO } from '../modules/dashboard/models/reviewsDTO';
import { Observable } from 'rxjs';
import { usuarioFavoritoDTO } from '../modules/dashboard/models/usuarioFavoritoDTO';

@Injectable({
  providedIn: 'root'
})
export class SummaryBusinessService {

constructor(private http: HttpClient) { }

GetResenasMejores(id:string,mejoresResenas: boolean, resenasMasCalidad: boolean, texto: string) {
  console.log("servicio");
  console.log(id);
  const headers = new HttpHeaders({
    'Authorization': 'FTYJT',
    'Accept': 'application/json',
    'X-B3-TraceId': '1',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
  });
let url;
  // Construimos la URL con los valores de los booleanos como parámetros de consulta
  if(texto==""){  url = `${environment.UrlBackend}/review/${id}?showBestReviews=${mejoresResenas}&showQualityReviews=${resenasMasCalidad}`;}
  else{  url = `${environment.UrlBackend}/review/${id}?showBestReviews=${mejoresResenas}&showQualityReviews=${resenasMasCalidad}&textLike=${texto}`;}
 

  return this.http.get<ReviewsDTO[]>(url, { headers });
}

GetUsuarioFavorito(businessId: string) {

  const headers = new HttpHeaders({
    'Authorization': 'FTYJT',
    'Accept': 'application/json',
    'X-B3-TraceId': '1',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/dashboard/summary'
  });

  // Construimos la URL con los valores de los booleanos como parámetros de consulta
  const url = `${environment.UrlBackend}/tips/business/${businessId}` ;

  return this.http.get<usuarioFavoritoDTO>(url, { headers });
}


}
