import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import * as WC from 'woocommerce-api';
import { PersistenceService } from "angular-persistence";
import { AsyncLocalStorage } from "angular-async-local-storage";
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: any;
  WooCommerce: any; 
  products: any[];
  productItem: any;
  reviews: any[] = [];

  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];



  constructor( private route: ActivatedRoute,
    private persistenceService: PersistenceService,
    protected storage: AsyncLocalStorage
    ) { 
    


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
    this.product = this.route.snapshot.params['product'];
    

        this.WooCommerce.getAsync('products/' + this.product).then( (data) => {
    
          this.productItem = [];
          // this.products = JSON.parse(data.body).products;
    
          this.product = JSON.parse(data.body).product;
    
          console.log(this.product);

          this.WooCommerce.getAsync('products/' + this.product.id + '/reviews').then((data)=>{
            
                  this.reviews = JSON.parse(data.body).product_reviews;
                  console.log(this.reviews);
            
                }, (err) => {
                  console.log(err);
                });
                
    
      });


      //gallery
      // this.galleryOptions = [
      //   {
      //     width: '350px',
      //     height: '435px',
      //     thumbnailsColumns: 4
      //   }
      // ];

      // this.galleryImages = [
      //  this.product.images
      // ];

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
  
    });
  }
}
