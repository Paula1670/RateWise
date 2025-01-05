/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReviewTableItemComponent } from './review-table-item.component';

describe('ReviewTableItemComponent', () => {
  let component: ReviewTableItemComponent;
  let fixture: ComponentFixture<ReviewTableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
