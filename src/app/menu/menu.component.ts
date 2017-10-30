import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Http } from "@angular/http";
import { NgModel } from '@angular/forms';
import { Form } from "@angular/forms";

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
  user: any

  constructor(dConfig: NgbDropdownConfig, public http: Http) {

    dConfig.placement= 'bottom-left';
    this.username = "";
    this.password = "";

  
   }

  ngOnInit() {
    
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
      }

      sessionStorage.setItem("userLoginId", response.user.id);
      sessionStorage.setItem("userLoginUsername", response.user.username)
      sessionStorage.setItem("userLoginCookie", response.cookie)
      sessionStorage.setItem("userLoginEmail", response.user.email);
      sessionStorage.setItem("userLoginFirstname", response.user.firstname);

      this.loggedIn = true;

      console.log( sessionStorage.getItem("userLoginFirstname"), sessionStorage.getItem("userLoginEmail"), sessionStorage.getItem("userLoginId"), sessionStorage.getItem("userLoginUsername"), sessionStorage.getItem("userLoginCookie"),  );
      
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
}
