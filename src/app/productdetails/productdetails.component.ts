import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import * as WC from 'woocommerce-api';
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

}
