import { Component, OnInit } from '@angular/core';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { BusinessDTO } from '../../models/businessDTO';
import { BusinessCardComponent } from '../../components/Business/BusinessCard/BusinessCard.component';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  standalone: true,
      imports: [
          NftHeaderComponent,
          BusinessCardComponent,

          NftAuctionsTableComponent,
      ],
})
export class BusinessComponent implements OnInit {

business: Array<BusinessDTO>;

  constructor() {
    this.business = [
      {
  businessId: "tnhfDv5Il8EaGSXZGiuQGg",
  name: "Garaje",
  address: "475 3rd St",
  city: "San Francisco",
  state: "CA",
  postalCode: "94107",
  latitude: 37.7817529521,
  longitude: -122.39612197,
  stars: 4.5,
  reviewCount: 1198,
  isOpen: true,
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


      },
      {
        businessId: "mcdo12345abcdef67890ghij", // Genera un ID único
        name: "McDonald's",
        address: "1200 Market St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94103",
        latitude: 37.774929,
        longitude: -122.419416,
        stars: 3.5,
        reviewCount: 857,
        isOpen: true,
        attributes: {
          RestaurantsTakeOut: true,
          BusinessParking: {
            garage: false,
            street: true,
            validated: false,
            lot: true,
            valet: false,
          },
        },
        categories: ["Fast Food", "Burgers"],
        hours: {
          Monday: "07:00-23:00",
          Tuesday: "07:00-23:00",
          Wednesday: "07:00-23:00",
          Thursday: "07:00-23:00",
          Friday: "07:00-23:00",
          Saturday: "07:00-23:00",
          Sunday: "07:00-23:00",
        },
      },
      {
        businessId: "bk12345abcdef67890ghijkl", // Genera un ID único
        name: "Burger King",
        address: "250 Mission St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94105",
        latitude: 37.789123,
        longitude: -122.399456,
        stars: 3.8,
        reviewCount: 643,
        isOpen: false,
        attributes: {
          RestaurantsTakeOut: true,
          BusinessParking: {
            garage: false,
            street: true,
            validated: true,
            lot: false,
            valet: false,
          },
        },
        categories: ["Fast Food", "Burgers", "American"],
        hours: {
          Monday: "08:00-22:00",
          Tuesday: "08:00-22:00",
          Wednesday: "08:00-22:00",
          Thursday: "08:00-22:00",
          Friday: "08:00-22:00",
          Saturday: "08:00-22:00",
          Sunday: "09:00-21:00",
        },
      },
    ];
  }

  ngOnInit(): void {}

}
