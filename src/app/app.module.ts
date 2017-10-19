import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as WC from 'woocommerce-api';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductsDefComponent } from './products-def/products-def.component';

//ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//angular material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';
import { MenuComponent } from './menu/menu.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsDefComponent,
    CategoriesComponent,
    DealsComponent,
    MenuComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    RouterModule.forRoot([
      {path:'productDetails', component: ProductdetailsComponent },
      {path: 'products', component: ProductsDefComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
