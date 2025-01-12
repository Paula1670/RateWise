import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/Business.service';
import { BusinessDTO } from '../../models/businessDTO';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-FormBusiness',
  templateUrl: './FormBusiness.component.html',
  standalone:true,
  imports:[CommonModule,  ReactiveFormsModule, HttpClientModule]
})
export class FormBusinessComponent implements OnInit {
  businessForm:FormGroup;
  constructor(private router:Router, private service: BusinessService,private fb: FormBuilder) {

    this.businessForm = this.fb.group({
        name: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        latitude: [0, [Validators.required]],
        longitude: [0, [Validators.required]],
        categories: ['', [Validators.required]],
        attributes: ['', [Validators.required]],
        hours: ['', [Validators.required]],
        is_open: ['no'],
        postal_code: ['']

    });
   }
  navigateToRoute(): void{
this.router.navigate(['/dashboard/business']);

  }

  ngOnInit() {
  }

  createBusiness() {
    let is_openNow= '0';
if(this.businessForm.value.is_open=='si') {is_openNow='1';}
   this.service.createBusiness( {
          business_id: this.businessForm.value.businessId,
          name: this.businessForm.value.name,
          address: this.businessForm.value.address,
          city: this.businessForm.value.city,
          state: this.businessForm.value.state,
          postal_code: this.businessForm.value.postal_code,
          latitude: this.businessForm.value.latitude,
          longitude: this.businessForm.value.longitude,
          stars: 0,
          reviewCount: 0,
          is_open: is_openNow ,
          attributes: this.businessForm.value.attributes ? this.businessForm.value.attributes: null,
          categories: this.businessForm.value.categories? this.businessForm.value.categories : null,
          hours: this.businessForm.value.hours ? this.businessForm.value.hours : null

        }).subscribe(
          (response: any) => {
            console.log('Respuesta del servidor:', response);

            window.location.reload();
          },
          (error: any) => {
            console.error('Error al llamar al endpoint:', error);
          }
        );


  }

}
