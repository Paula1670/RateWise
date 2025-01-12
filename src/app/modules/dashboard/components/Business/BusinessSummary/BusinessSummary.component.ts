import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../../models/businessDTO';
import { CommonModule, NgFor } from '@angular/common';
import { usuarioFavoritoDTO } from '../../../models/usuarioFavoritoDTO';

@Component({
  selector: 'app-BusinessSummary',
  templateUrl: './BusinessSummary.component.html',
  standalone:true,
  imports:[NgFor, CommonModule]
})
export class BusinessSummaryComponent implements OnInit {

  @Input() business: BusinessDTO = <BusinessDTO>{};

  @Input() usuarioFavorito: usuarioFavoritoDTO = <usuarioFavoritoDTO>{};
  topTipUser: boolean=true;


  constructor() {

  }
ngOnInit(): void {

}


}
