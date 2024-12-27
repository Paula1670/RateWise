import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { BusinessComponent } from './pages/business/business.component';
import { FormBusinessComponent } from './pages/FormBusiness/FormBusiness.component';
import { SummaryBusinessComponent } from './pages/summaryBusiness/summaryBusiness.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'business', pathMatch: 'full' },
      { path: 'nfts', component: NftComponent },
      { path: 'business', component: BusinessComponent },
      { path: 'summary', component: SummaryBusinessComponent },
      { path: 'createBusiness', component: FormBusinessComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
