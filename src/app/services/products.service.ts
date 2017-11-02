import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class ProductsService {

  products: any;
  WooCommerce: any; 

  constructor() { 

    this.WooCommerce = WC({
      url: 'https://cloud.edgetech.co.ke/m-tush',
      consumerKey: 'ck_3106173da4bf0f0269cd58e8be438139dc515b87',
      consumerSecret: 'cs_ee6a004c51a4206d4d9a374b1b05adac24927f53',
      version: 'v1',
      // wpAPI: false,
      // version: 'wc/v1',
      verifySsl: false,
      queryStringAuth: true
    });

    
    this.WooCommerce.getAsync('products').then( (data) => {
     localStorage.setItem('productlist', (data.body));
      console.log(JSON.parse(localStorage.getItem('productlist')));
  });
    
}
  
  productsData(){

  }
}
