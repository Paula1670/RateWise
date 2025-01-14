import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../models/businessDTO';
import { BusinessSummaryComponent } from '../../components/Business/BusinessSummary/BusinessSummary.component';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { ReviewTableComponent } from '../../components/Review/review-table/review-table.component';
import { ReviewsDTO } from '../../models/reviewsDTO';
import { Router } from '@angular/router';
import { SummaryBusinessService } from 'src/app/services/summaryBusiness.service';
import { usuarioFavoritoDTO } from '../../models/usuarioFavoritoDTO';


@Component({
  selector: 'app-summaryBusiness',
  templateUrl: './summaryBusiness.component.html',
  standalone:true,
  imports: [BusinessSummaryComponent, ReviewTableComponent, NftAuctionsTableComponent],
})
export class SummaryBusinessComponent implements OnInit {
  business: BusinessDTO = <BusinessDTO>{};
  reviewList: ReviewsDTO[]=[];
  usuario:usuarioFavoritoDTO= <usuarioFavoritoDTO>{};
  constructor(private router: Router, private service:SummaryBusinessService) {
 
       }
  

       ngOnInit(): void {
        const state = history.state as { business: BusinessDTO };
        if (state?.business) {
          this.business = state.business;
          console.log("Cargando usuario favorito:", this.usuario);
          this.service.GetUsuarioFavorito(this.business.business_id).subscribe({
            next: (usuarioFavorito: usuarioFavoritoDTO) => {
              this.usuario = usuarioFavorito;
              console.log("Usuario favorito cargado:", this.usuario);
            
            },
            error: (err) => {
              console.error("Error al cargar el usuario favorito:", err);
            }
          });
        } else {
          console.error('No se encontraron datos del negocio en el estado de navegación');
        }
      }
      

}
