import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-BusinessHeader',
  templateUrl: './BusinessHeader.component.html',
  standalone: true,
})
export class BusinessHeaderComponent implements OnInit {

  constructor(private router: Router) { }

 navigateToRoute(): void{
this.router.navigate(['/dashboard/createBusiness']);

}


  ngOnInit() {
  }

}
