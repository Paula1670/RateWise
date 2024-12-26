import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../../models/businessDTO';

@Component({
  selector: '[BusinessCard]',
  templateUrl: './BusinessCard.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class BusinessCardComponent implements OnInit {


  @Input() business: BusinessDTO = <BusinessDTO>{};
  constructor() {}

  ngOnInit(): void {}

}
