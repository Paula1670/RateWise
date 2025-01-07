import { Component, Input, OnInit } from '@angular/core';
import { ReviewsDTO } from '../../../models/reviewsDTO';
import { ReviewTableItemComponent } from '../review-table-item/review-table-item.component';
import { NgFor, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableFilterService } from 'src/app/modules/uikit/pages/table/services/table-filter.service';

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  standalone: true,
  imports: [ReviewTableItemComponent, NgFor, AngularSvgIconModule, NgIf]
})
export class ReviewTableComponent implements OnInit {

  public mejoresResenas: boolean;
  public resenasMasCalidad: boolean;
  public reviews: ReviewsDTO[] = [];
  public filteredReviews: ReviewsDTO[] = []; // Variable para las reseñas filtradas

  constructor(public filterService: TableFilterService) {
    this.mejoresResenas = true;
    this.resenasMasCalidad=true;
    this.reviews = [
      {
        "reviewId": "rev12345",
        "userId": "usr67890",
        "businessId": "bus54321",
        "stars": 5,
        "date": "2025-01-01",
        "text": "¡Excelente servicio y comida deliciosa! Definitivamente regresaré.",
        "useful": 12,
        "funny": 3,
        "cool": 8
      },
      {
        "reviewId": "rev54321",
        "userId": "usr98765",
        "businessId": "bus12345",
        "stars": 3,
        "date": "2024-12-15",
        "text": "La comida estuvo bien, pero el servicio podría mejorar.",
        "useful": 5,
        "funny": 1,
        "cool": 2
      },
      {
        "reviewId": "rev67890",
        "userId": "usr11223",
        "businessId": "bus67890",
        "stars": 4,
        "date": "2024-11-20",
        "text": "Gran ambiente y buena música, aunque algo caro.",
        "useful": 7,
        "funny": 2,
        "cool": 6
      },
      {
        "reviewId": "rev11223",
        "userId": "usr44556",
        "businessId": "bus99887",
        "stars": 1,
        "date": "2024-10-05",
        "text": "Horrible experiencia. Esperé una hora para que me atendieran.",
        "useful": 15,
        "funny": 0,
        "cool": 1
      },
      {
        "reviewId": "rev44556",
        "userId": "usr33445",
        "businessId": "bus11223",
        "stars": 2,
        "date": "2024-09-30",
        "text": "El lugar está bonito, pero la comida dejó mucho que desear.",
        "useful": 4,
        "funny": 0,
        "cool": 3
      }
    ];
    this.filteredReviews = [...this.reviews]; // Inicialmente, todas las reseñas están visibles
  }

  ngOnInit() {}

  cambiarResenas() {
    if (this.mejoresResenas) this.mejoresResenas = false;
    else this.mejoresResenas = true;
  }

  cambiarResenasCalidad() {
    if (this.resenasMasCalidad) this.resenasMasCalidad = false;
    else this.resenasMasCalidad = true;
  }

  // Función para manejar el cambio en la búsqueda
  onSearchChange(value: Event) {
    const input = value.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase().trim();

    // Filtrar reseñas que contengan el término de búsqueda
    this.filteredReviews = this.reviews.filter(review =>
      review.text.toLowerCase().includes(searchTerm)
    );
  }
}
