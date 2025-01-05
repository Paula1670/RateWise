import { Component, Input, OnInit } from '@angular/core';
import { ReviewsDTO } from '../../../models/reviewsDTO';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-review-table-item',
  templateUrl: './review-table-item.component.html',
  standalone:true,

})
export class ReviewTableItemComponent implements OnInit {
  @Input() review = <ReviewsDTO>{};
  constructor() { }

  ngOnInit() {
  }

}
