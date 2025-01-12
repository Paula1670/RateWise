import { Component, Input, OnInit } from '@angular/core';
import { ReviewsDTO } from '../../../models/reviewsDTO';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableFilterService } from 'src/app/modules/uikit/pages/table/services/table-filter.service';
import { SummaryBusinessService } from 'src/app/services/summaryBusiness.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  standalone: true,
  imports: [  AngularSvgIconModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ReviewTableComponent implements OnInit {
  control= new FormControl();
  @Input() reviews: ReviewsDTO[] = [];
  public mejoresResenas: boolean;
  public resenasMasCalidad: boolean;
  @Input() idBusiness: string;

  //public reviews: ReviewsDTO[] = [];
  public filteredReviews: ReviewsDTO[] = []; // Variable para las reseñas filtradas
  public texto:string;

  constructor(public filterService: TableFilterService, public service:SummaryBusinessService) {
    this.mejoresResenas = true;
    this.resenasMasCalidad=true;
    this.texto="";
    this.idBusiness="";

  }

  ngOnInit() {this.getResenas(this.idBusiness,this.mejoresResenas, this.resenasMasCalidad, this.texto);
    this.observerChangeSearch();


  }

  observerChangeSearch() {
    this.control.valueChanges.subscribe(query => {
    this.getResenas(this.idBusiness, this.mejoresResenas, this.resenasMasCalidad, query);
    });
  }
  cambiarResenas() {
    if (this.mejoresResenas) this.mejoresResenas = false;
    else this.mejoresResenas = true;
    this.reloadPage();
  }

  cambiarResenasCalidad() {
    if (this.resenasMasCalidad) this.resenasMasCalidad = false;
    else this.resenasMasCalidad = true;
    this.reloadPage();
  }


  reloadPage() {
    this.service.GetResenasMejores(this.idBusiness, this.mejoresResenas, this.resenasMasCalidad, this.texto ).subscribe({
      next: (resenas) => {

        this.reviews = resenas;  // Actualiza las reseñas con la respuesta

      },
      error: (err) => {
        console.error('Error al obtener reseñas:', err);
      }
    });

  }
  getResenas(id:string, mejoresResenas: boolean, resenasMasCalidad: boolean, texto:string) {
    console.log(id);
    this.service.GetResenasMejores(this.idBusiness, mejoresResenas, resenasMasCalidad, texto).subscribe({
      next: (resenas) => {
        this.reviews = resenas;
        console.log(resenas);
      },
      error: (err) => {
        console.error('Error al obtener reseñas:', err);
      }
    });
  }

}
