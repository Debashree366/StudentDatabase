import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularmaterialModule } from './angularmaterial/angularmaterial/angularmaterial.module';
import { HomeComponent } from './home/home.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageUserComponent,
    ManageProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularmaterialModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
