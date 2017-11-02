import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import {NgbCarouselConfig, NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";
import { ProductsService } from "../services/products.service";
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { MenuComponent } from '../menu/menu.component';


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

  
  constructor(config: NgbCarouselConfig, 
              dConfig: NgbDropdownConfig,
              private route: ActivatedRoute,
              private router: Router,
              private productsData: ProductsService,
              protected storage: AsyncLocalStorage ) { 



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


     this.WooCommerce.getAsync('products/categories').then((data) =>{
      // console.log(JSON.parse(data.body).product_categories);
      
      this.categories = JSON.parse(data.body).product_categories;
      this.parentCategories = [];
      this.subcat1 = [];
      this.subcat2 = [];

      // console.log(this.categories.length);

      //products
    

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

    console.log(this.productsData.productsData);
    this.featuredProducts = [];
    this.saleProducts = [];





        
        this.products = JSON.parse(localStorage.getItem('productlist')).products;
        
            // let products = localStorage.getItem('productlist');
        
            console.log('storage', this.products);
        
            for( let i = 0; i < this.products.length; i ++ ){
               //featured products
              if(this.products[i].featured == true){
                this.featuredProducts.push(this.products[i]);
              }
              //products on sale
              if(this.products[i].sale_price){
                this.saleProducts.push(this.products[i]);
              }
            } 
    
           
          }
    


onSelect(product){
  this.router.navigate(['product', product.id]);
  console.log(this.router)
}

addToCart(product){
    
        this.storage.getItem("cart").subscribe((cart)=> {
          console.log('Initial Cart Data', cart);
          //cart module
          if(cart == null || cart.length == 0){
    
            cart = [];
    
            cart.push({
              "product": product,
              "qty": 1,
              "amount": parseFloat(product.price)
            });
          } else {
    
            let added = 0;
    
            for(let i = 0; i < cart.length; i++){
              if(product.id == cart[i].product.id){
                console.log("Product is already in the cart");
    
                let qty = cart[i].qty;
    
                cart[i].qty = qty+1;
                cart[i].amount = parseFloat(cart[i].amount) + parseFloat(cart[i].product.price);
                added = 1;
              }
            }
            if(added == 0){
              cart.push({
                "product": product,
                "qty": 1,
                "amount": parseFloat(product.price)
              });
            }
          }
    
          this.storage.setItem("cart", cart).subscribe( (cart)=>{
    
            console.log("cart updated", cart);
            console.log(cart);
    
          });
    
        })

}
addToWish(product){
  this.storage.getItem("wishlist").subscribe((wishlist)=> {
    console.log('Initial Cart Data', wishlist);
    //cart module
    if(wishlist == null || wishlist.length == 0){

      wishlist = [];

      wishlist.push({
        "product": product,
        "qty": 1,
        "amount": parseFloat(product.price)
      });
    } else {

      let added = 0;

      for(let i = 0; i < wishlist.length; i++){
        if(product.id == wishlist[i].product.id){
          console.log("Product is already in the cart");

          let qty = wishlist[i].qty;

          wishlist[i].qty = qty+1;
          wishlist[i].amount = parseFloat(wishlist[i].amount) + parseFloat(wishlist[i].product.price);
          added = 1;
        }
      }
      if(added == 0){
        wishlist.push({
          "product": product,
          "qty": 1,
          "amount": parseFloat(product.price)
        });
      }
    }

    this.storage.setItem("cart", wishlist).subscribe( (cart)=>{

      console.log("cart updated", cart);
      console.log(cart);

    });

  })
}

}
