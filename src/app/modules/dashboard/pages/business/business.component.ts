import { Component, Input, OnInit } from '@angular/core';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { BusinessDTO } from '../../models/businessDTO';
import { BusinessCardComponent } from '../../components/Business/BusinessCard/BusinessCard.component';
import { BusinessHeaderComponent } from '../../components/Business/BusinessHeader/BusinessHeader.component';
import { BusinessService } from 'src/app/services/Business.service';
import { FormControl } from '@angular/forms';
import { Pagination } from '../../models/pagination';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  standalone: true,
      imports: [
          BusinessHeaderComponent,
          BusinessCardComponent,
          NftAuctionsTableComponent,
      ],
})
export class BusinessComponent implements OnInit {

@Input() business: BusinessDTO[] = [];
  control= new FormControl();

  public ciudad:string;

  public nombre:string;
  paginatedBusiness: BusinessDTO[] = [];
  pagination: Pagination = {
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    hasNext: false,
  };
  itemsPerPage: number = 10;
  currentPage: number = 1;
    constructor(private http: HttpClient, public service:BusinessService,private router: Router) {
this.ciudad='';
this.nombre='';
    }

//filtros
onOrderChange() {
 this.control.valueChanges.subscribe(query => {
  this.getBusiness();
  });
}

    getBusiness(): void {
      const offset = (this.currentPage - 1) * this.itemsPerPage;
      this.service.getBusiness(offset,this.ciudad, this.nombre, ).subscribe({
        next: (data) => {
          this.business = data.business;
          this.pagination = data.pagination;
          this.updatePaginatedUsers();
        },
        error: (err) => {
          console.error('Error al obtener usuarios:', err);
        },
      });
    }

    updatePaginatedUsers(): void {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      this.paginatedBusiness = this.business.slice(startIndex, startIndex + this.itemsPerPage);
    }

    get totalPages(): number {
      return Math.ceil(this.pagination.totalItems / this.itemsPerPage);
    }


    //Paginación
    changePage(newPage: number): void {
      if (newPage > 0 && newPage <= this.totalPages) {
        this.currentPage = newPage;
        this.getBusiness();
      }
    }

    onItemsPerPageChange(event: Event): void {

      const selectedValue = (event.target as HTMLSelectElement).value;
      this.itemsPerPage = parseInt(selectedValue, 10);
      this.currentPage = 1;
      this.getBusiness();


    }
    ngOnInit() {this.getBusiness();}

    navigateToRoute(): void{
      this.router.navigate(['/dashboard/summary']);


        }

}
