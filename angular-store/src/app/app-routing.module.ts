import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { UserTransactionPageComponent } from './user-transaction-page/user-transaction-page.component';


const routes: Routes = [
  {path: '', redirectTo:'/listings', pathMatch: 'full'},
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  { path: 'listings/:id',component:ListingDetailPageComponent},
  { path: 'my-transactions', component: UserTransactionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
