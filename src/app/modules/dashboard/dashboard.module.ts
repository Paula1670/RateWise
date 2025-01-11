import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [DashboardRoutingModule, NgxPaginationModule],
})
export class DashboardModule {}
