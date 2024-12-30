import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessActionComponent } from '../BusinessAction/BusinessAction.component';

@Component({
  selector: 'app-BusinessHeader',
  templateUrl: './BusinessHeader.component.html',
  standalone: true,
  imports:[BusinessActionComponent]
})
export class BusinessHeaderComponent implements OnInit {

  constructor(private router: Router) { }

 navigateToRoute(): void{
this.router.navigate(['/dashboard/createBusiness']);

}


  ngOnInit() {
  }

}
