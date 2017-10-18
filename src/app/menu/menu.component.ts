import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [NgbDropdownConfig]
})
export class MenuComponent implements OnInit {

  WooCommerce: any; 
  categories: any[];
  parentCategories: any;
  subcat1: any;
  subcat2: any;

  constructor(dConfig: NgbDropdownConfig) {

    dConfig.placement= 'bottom-left';




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
