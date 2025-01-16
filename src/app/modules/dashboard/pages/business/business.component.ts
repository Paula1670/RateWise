import { Component, Input, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { BusinessDTO } from '../../models/businessDTO';
import { BusinessCardComponent } from '../../components/Business/BusinessCard/BusinessCard.component';
import { BusinessHeaderComponent } from '../../components/Business/BusinessHeader/BusinessHeader.component';
import { BusinessService } from 'src/app/services/Business.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pagination } from '../../models/pagination';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  standalone: true,
  imports: [
    BusinessHeaderComponent,
    BusinessCardComponent,
    NftAuctionsTableComponent,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class BusinessComponent implements OnInit {
  @Input() business: BusinessDTO[] = [];
  control = new FormControl();
  controlCity = new FormControl();
  controlName = new FormControl();

  public ciudad: string;
  public businessId: number;
  public nombre: string;

  paginatedBusiness: BusinessDTO[] = [];
  pagination: Pagination = {
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    hasNext: false,
  };
  itemsPerPage: number = 30;
  currentPage: number = 1;

  constructor(
    private http: HttpClient,
    public service: BusinessService,
    private router: Router
  ) {
    this.ciudad = '';
    this.nombre = '';
    this.businessId = 0;
  }

  onOrderChange() {
    this.control.valueChanges.subscribe((query) => {
      this.getBusiness();
    });
  }

  getBusiness(): void {

    const offset = this.currentPage - 1;
    this.service.getBusiness(offset, this.ciudad, this.nombre).subscribe({
      next: (data) => {
        this.business = data.business;
        this.pagination = data.pagination;
        this.updatePaginatedUsers();
      },
      error: (err) => {
        console.error('Error al obtener negocios:', err);
      },
    });
  }

  updatePaginatedUsers(): void {
    this.paginatedBusiness = this.business;
  }

  // Paginación
  changePage(newPage: number): void {
    if (newPage > 0 && newPage <= this.pagination.totalPages) {
      this.currentPage = newPage;
      this.getBusiness();
    }
  }

  ngOnInit() {
    this.controlCity.valueChanges.subscribe((value) => {
      this.ciudad = value || ''; 
      this.getBusiness();
    });

    this.controlName.valueChanges.subscribe((value) => {
      this.nombre = value || ''; 
      this.getBusiness();
    });

   
    this.getBusiness();
  }

  navigateToRoute(business: BusinessDTO): void {
    this.router.navigate(['/dashboard/summary'], { state: { business } });
  }

  delete(id:string){
    if (id) {
      this.service.deleteBusiness(id).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
          window.location.reload();
        }
      );
    }
  }
}
