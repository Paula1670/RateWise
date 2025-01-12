import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BusinessDTO } from '../../../models/businessDTO';
import { Router } from '@angular/router';

@Component({
  selector: '[BusinessCard]',
  templateUrl: './BusinessCard.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class BusinessCardComponent implements OnInit {


  @Input() business!: BusinessDTO ;
  constructor(private router: Router) {}
  navigateToRoute(): void{
this.router.navigate(['/dashboard/summary']);


  }
  ngOnInit(): void {}

}
