import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-FormBusiness',
  templateUrl: './FormBusiness.component.html',
  standalone:true,
  imports:[FormsModule]
})
export class FormBusinessComponent implements OnInit {

  constructor(private router:Router) { }
  navigateToRoute(): void{
this.router.navigate(['/dashboard/business']);

  }

  ngOnInit() {
  }


}
