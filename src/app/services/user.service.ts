import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  userDetails: Observable<Array<number>>;
  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: 'https://cloud.edgetech.co.ke/m-tush',
      consumerKey: 'ck_3106173da4bf0f0269cd58e8be438139dc515b87',
      consumerSecret: 'cs_ee6a004c51a4206d4d9a374b1b05adac24927f53',
      version: 'v3',
      verifySsl: false,
      queryStringAuth: true
    });

    // let email = sessionStorage.getItem('userLoginEmail');
    // this.WooCommerce.getAsync("customers/email/"+email).then( (data) => {
     
    //   return    this.userDetails = JSON.parse(data.body).customer;

    //  });
   }

  details(){
    let email = sessionStorage.getItem('userLoginEmail');

    this.WooCommerce.getAsync("customers/email/"+email).then( (data) => {
     
      return   this.userDetails = JSON.parse(data.body).customer;

    });
  }
}
