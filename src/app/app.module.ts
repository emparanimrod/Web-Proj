import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as WC from 'woocommerce-api';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from "./services/products.service";
import { FormsModule } from '@angular/forms';
import { PersistenceModule } from "angular-persistence";
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

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
import { HttpModule } from "@angular/http";
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { ShippingmethodsComponent } from './shippingmethods/shippingmethods.component';
import { OrdersComponent } from './orders/orders.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';
// import { EzPlus } from "ez-plus";


export const ROUTES: Routes = [
  { path: '', component: ProductsDefComponent },
  { path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsDefComponent},
  {path: 'product/:product', component: ProductdetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'privacy', component: PrivacypolicyComponent},
  {path: 'terms', component: TermsandconditionsComponent},
  {path: 'shippingmethods', component: ShippingmethodsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'vouchers', component: VouchersComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'register', component: SignupComponent},
  {path: 'checkout', component: CheckoutComponent}
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
    FooterComponent,
    LoginComponent,
    CartComponent,
    FaqComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    ShippingmethodsComponent,
    OrdersComponent,
    VouchersComponent,
    CheckoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersistenceModule,
    AsyncLocalStorageModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    OwlModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES)

  ],
  providers: [ProductsService,
              CartService,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
