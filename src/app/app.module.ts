import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as WC from 'woocommerce-api';


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

@NgModule({
  declarations: [
    AppComponent,
    ProductsDefComponent,
    CategoriesComponent,
    DealsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
