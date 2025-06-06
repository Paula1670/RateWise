import { Component, Input, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { BusinessDTO } from '../../../models/businessDTO';

@Component({
    selector: '[nft-dual-card]',
    templateUrl: './nft-dual-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class NftDualCardComponent implements OnInit {
  @Input() nft: Nft = <Nft>{};

  @Input() business: BusinessDTO = <BusinessDTO>{};
  constructor() {}

  ngOnInit(): void {}
}
