import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../models/businessDTO';
import { BusinessSummaryComponent } from '../../components/Business/BusinessSummary/BusinessSummary.component';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { ReviewTableComponent } from '../../components/Review/review-table/review-table.component';


@Component({
  selector: 'app-summaryBusiness',
  templateUrl: './summaryBusiness.component.html',
  standalone:true,
  imports: [BusinessSummaryComponent, ReviewTableComponent, NftAuctionsTableComponent],
})
export class SummaryBusinessComponent implements OnInit {
  @Input() business: BusinessDTO;

  constructor() {
    this.business =
       {
   businessId: "tnhfDv5Il8EaGSXZGiuQGg",
   name: "Garaje",
   address: "475 3rd St",
   city: "San Francisco",
   state: "CA",
   postalCode: "94107",
   latitude: 37.25363686594387,
   longitude: -6.949175188221014,
   stars: 4.5,
   reviewCount: 1198,
   isOpen: '0',
   attributes: {
     RestaurantsTakeOut: true,
     BusinessParking: {
       garage: false,
       street: true,
       validated: false,
       lot: false,
       valet: false,
     },
   },

   categories: ["Mexican", "Burgers", "Gastropubs"],
   hours: {
     Monday: "10:00-21:00",
     Tuesday: "10:00-21:00",
     Wednesday: "10:00-21:00",
     Thursday: "10:00-21:00",
     Friday: "10:00-21:00",
     Saturday: "10:00-21:00",
     Sunday: "11:00-18:00",
   },


       }
  }

  ngOnInit() {
    //YA SE AGREGARÁ
  }

}
