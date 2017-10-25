import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as WC from 'woocommerce-api';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from "./services/products.service";


import { AppComponent } from './app.component';
import { ProductsDefComponent } from './products-def/products-def.component';

//ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//angular material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';
import { MenuComponent } from './menu/menu.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { OwlModule } from "ng2-owl-carousel";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { FooterComponent } from './footer/footer.component';
// import { EzPlus } from "ez-plus";


export const ROUTES: Routes = [
  { path: '', component: ProductsDefComponent },
  {path: 'products', component: ProductsDefComponent},
  {path: 'product/:product', component: ProductdetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsDefComponent,
    CategoriesComponent,
    DealsComponent,
    MenuComponent,
    ProductdetailsComponent,
    FootercomponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    OwlModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES)

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
