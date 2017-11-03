import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total: any;
  cartItems: any;
  itemCount: any;
  WooCommerce: any;
  userInfo: any;
  newOrder: any; 

  constructor(protected storage: AsyncLocalStorage,
              private router: Router) {
                this.WooCommerce = WC({
                  url: 'https://cloud.edgetech.co.ke/m-tush',
                  consumerKey: 'ck_3106173da4bf0f0269cd58e8be438139dc515b87',
                  consumerSecret: 'cs_ee6a004c51a4206d4d9a374b1b05adac24927f53',
                  version: 'v3',
                  // wpAPI: false,
                  // version: 'wc/v1',
                  verifySsl: false,
                  queryStringAuth: true
                });
               }

  ngOnInit() {

    // user details
    let email = sessionStorage.getItem('userLoginEmail');

      this.WooCommerce.getAsync("customers/email/"+email).then( (data) => {
      
              this.newOrder = JSON.parse(data.body).customer;
    
            });

    this.total = 0.00;
    //cart
 this.storage.getItem('cart').subscribe((data)=>{
   console.log('checkout', data);
  this.itemCount = data.length;
   this.cartItems = data;

   if(this.cartItems ){
    this.cartItems.forEach( (item, index)=>{
      this.total = this.total + (item.product.price * item.qty)
    });
    console.log(data);
   } else {

    console.log(Error);

  }

 });
  }


}
