import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as WC from 'woocommerce-api';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: any;
  WooCommerce: any; 



  constructor( private route: ActivatedRoute) { 

    this.product.id = this.route.snapshot.url;

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

  }

  ngOnInit() {
    let id = this.route.snapshot.url;

    this.WooCommerce.getAsync('products/' + this.product.id ).then((data)=>{
      
            this.product = JSON.parse(data.body).product_reviews;
            console.log(this.product);
      
          }, (err) => {
            console.log(err);
          });
    

  }

}
