import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { ResupplyStockComponent } from './resupply-stock/resupply-stock.component';

const routes: Routes = [
  { path: 'resupply-stock', component: ResupplyStockComponent},
  { path: 'purchase', component: PurchaseComponent},
  { path: '', redirectTo: 'purchase', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
