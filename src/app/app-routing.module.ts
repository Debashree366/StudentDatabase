import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'', redirectTo:'manage-user', pathMatch:'full'},
  {path:'manage-user', component: ManageUserComponent},
  {path:'manage-product', component: ManageProductsComponent},
  {path:'navbar', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
