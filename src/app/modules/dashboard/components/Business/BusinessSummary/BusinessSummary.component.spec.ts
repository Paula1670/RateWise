/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BusinessSummaryComponent } from './BusinessSummary.component';

describe('BusinessSummaryComponent', () => {
  let component: BusinessSummaryComponent;
  let fixture: ComponentFixture<BusinessSummaryComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
