import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Http } from "@angular/http";
import { NgModel } from '@angular/forms';
import { Form } from "@angular/forms";
import { PersistenceService } from 'angular-persistence';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import {ActivatedRoute, Router} from "@angular/router";
import { AsyncPipe } from '@angular/common';

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
  username: string;
  password: string;
  loggedIn: boolean;
  user: any;
  cartItems: any;
  itemCount: any;
  wishItem: any;
  total: any;

  constructor(dConfig: NgbDropdownConfig, public http: Http, private router: Router,
    private persistenceService: PersistenceService, protected storage: AsyncLocalStorage) {

    dConfig.placement= 'bottom-left';
    this.username = "";
    this.password = "";

    this.total = 0.00;
    //cart
 this.storage.getItem('cart').subscribe((data)=>{
   console.log('menu cart', data);
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

  ngOnInit() {


//     this.total = 0.00;
//     //cart
//  this.storage.getItem('cart').subscribe((data)=>{
//    console.log('menu cart', data);
//   this.itemCount = data.length;
//    this.cartItems = data;

//    if(this.cartItems ){
//     this.cartItems.forEach( (item, index)=>{
//       this.total = this.total + (item.product.price * item.qty)
//     });
//     console.log(data);
//    } else {

//     console.log(Error);

//   }

//  })

 this.storage.getItem('wishlist').subscribe((data)=>{
  console.log('menu wishlist', data);
 this.wishItem = data.length;

  if(this.cartItems ){
   this.cartItems.forEach( (item, index)=>{
     this.total = this.total + (item.product.price * item.qty)
   });
   console.log(data);
  } else {

   console.log(Error);

 }

})

 console.log(this.cartItems);
    
    this.user = sessionStorage.getItem("userLoginFirstname")

    console.log("User", this.user);

    if(this.user != null){
      
                console.log("user logged in");
                console.log(this.user);
                this.loggedIn = true;
              }
              else {
                
                          console.log("No user is logged in");
                          this.user = {};
                          this.loggedIn = false;
                    }
  }
  
  login(){
    this.http.get("https://cloud.edgetech.co.ke/m-tush/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
    .subscribe( (res) => {
      console.log(res.json());

      let response = res.json();

      if (response.error){
        console.log(response.error);
        alert(response.error);
      }

      sessionStorage.setItem("userLoginId", response.user.id);
      sessionStorage.setItem("userLoginUsername", response.user.username)
      sessionStorage.setItem("userLoginCookie", response.cookie)
      sessionStorage.setItem("userLoginEmail", response.user.email);
      sessionStorage.setItem("userLoginFirstname", response.user.firstname);

      this.loggedIn = true;

      console.log( sessionStorage.getItem("userLoginFirstname"), sessionStorage.getItem("userLoginEmail"), sessionStorage.getItem("userLoginId"), sessionStorage.getItem("userLoginUsername"), sessionStorage.getItem("userLoginCookie"),  );
      alert('You have Been Successfully Logged In');
    });

  }

  logout(){
    sessionStorage.removeItem("userLoginId");
    sessionStorage.removeItem("userLoginUsername");
    sessionStorage.removeItem("userLoginCookie");
    sessionStorage.removeItem("userLoginEmail");
    sessionStorage.removeItem("userLoginFirstname");

    console.log("User Logged Out")

    this.loggedIn = false;
  }

  remove(item, i){
    
        let price = item.product.price;
        let qty = item.qty;
    
        this.cartItems.splice(i, 1);
    
        this.storage.setItem("cart", this.cartItems).subscribe( () => {
    
          this.total = this.total - (price * qty);
    
        });
    
        if(this.cartItems.length == 0){
    
          this.total = 0;
        }
    
      }

      cart(){
        this.router.navigate(['cart']);
      }
}
