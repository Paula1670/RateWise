/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SummaryBusinessComponent } from './summaryBusiness.component';

describe('SummaryBusinessComponent', () => {
  let component: SummaryBusinessComponent;
  let fixture: ComponentFixture<SummaryBusinessComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
