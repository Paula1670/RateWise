import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../models/businessDTO';
import { BusinessSummaryComponent } from '../../components/Business/BusinessSummary/BusinessSummary.component';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { ReviewTableComponent } from '../../components/Review/review-table/review-table.component';
import { ReviewsDTO } from '../../models/reviewsDTO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-summaryBusiness',
  templateUrl: './summaryBusiness.component.html',
  standalone:true,
  imports: [BusinessSummaryComponent, ReviewTableComponent, NftAuctionsTableComponent],
})
export class SummaryBusinessComponent implements OnInit {
  business: BusinessDTO = <BusinessDTO>{};
  reviewList: ReviewsDTO[]=[]
  constructor(private router: Router) {
    

       }
  

       ngOnInit(): void {
        console.log("hola");
        const state = history.state as { business: BusinessDTO };
        if (state?.business) {
          this.business = state.business;
          console.log(this.business);
        } else {
          console.error('No se encontraron datos del negocio en el estado de navegación');
        }
      }
      

}
