import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import {NgbCarouselConfig, NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-def',
  templateUrl: './products-def.component.html',
  styleUrls: ['./products-def.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductsDefComponent implements OnInit {

  WooCommerce: any; 
  products: any[];
  categories: any[];
  parentCategories: any;
  subcat1: any;
  subcat2: any;
  featuredProducts: any;
  saleProducts: any;

  
  constructor(config: NgbCarouselConfig, dConfig: NgbDropdownConfig) { 

    //carousel
    // config.wrap = true;
    dConfig.placement= 'bottom-right';

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

    //products

    this.WooCommerce.getAsync('products').then( (data) => {

      this.featuredProducts = [];
      this.saleProducts = [];
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;

      for( let i = 0; i < this.products.length; i ++ ){
         //featured products
        if(this.products[i].featured == true){
          this.featuredProducts.push(this.products[i]);
        }
        //products on sale
        if(this.products[i].sale_price){
          this.saleProducts.push(this.products[i]);
        }
      } console.log(this.saleProducts);


     }, (err) =>{
      console.log(err)
     });

     this.WooCommerce.getAsync('products/categories').then((data) =>{
      // console.log(JSON.parse(data.body).product_categories);
      
      this.categories = JSON.parse(data.body).product_categories;
      this.parentCategories = [];
      this.subcat1 = [];
      this.subcat2 = [];

      // console.log(this.categories.length);

      for( let i = 0; i < this.categories.length; i ++ ){
        if(this.categories[i].parent == 0){
          this.parentCategories.push(this.categories[i]);
          
        }
      } console.log(this.parentCategories);

      for( let i = 0; i < this.categories.length; i ++ ){
        if(this.categories[i].parent != 0){

          this.subcat1.push(this.categories[i]);

          this.subcat2.push(this.categories[i]);
          
        }
      } console.log(this.subcat1);
  
    }, (err) => {
      console.log(err)
    });
  }

  ngOnInit() {
  }

}
