import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Form, NgModel } from '@angular/forms';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;
  newUser: any = {};
  WooCommerce: any;

  constructor(protected storage: AsyncLocalStorage, public http: Http, public route: Router) { 
    this.username = "";
    this.password = "";

    
    this.WooCommerce = WC({
      url: 'https://cloud.edgetech.co.ke/m-tush',
      consumerKey: 'ck_3106173da4bf0f0269cd58e8be438139dc515b87',
      consumerSecret: 'cs_ee6a004c51a4206d4d9a374b1b05adac24927f53',
      version: 'v3',
      // wpAPI: false,
      // version: 'wc/v1',
      verifySsl: false,
      queryStringAuth: true})

  }

  ngOnInit() {
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

      this.route.navigate([''])

      console.log( sessionStorage.getItem("userLoginFirstname"), sessionStorage.getItem("userLoginEmail"), sessionStorage.getItem("userLoginId"), sessionStorage.getItem("userLoginUsername"), sessionStorage.getItem("userLoginCookie"),  );
      alert('You have Been Successfully Logged In');
    });

  }

  signup(){

    let customerData= {
      customer: {}
    }

    customerData.customer = {
      "email": this.newUser.email,
      "first_name": this.newUser.first_name,
      "last_name": this.newUser.last_name,
      "username": this.newUser.username,
      "password": this.newUser.password,
      // "confirmPassword": this.newUser.confirmPassword
    }

    if(this.newUser.password == this.newUser.confirmPassword){

      console.log("password match");

      this.WooCommerce.postAsync('customers', customerData).then( (data) => {
        
              console.log(JSON.parse(data.body));
              let response =(JSON.parse(data.body));
        
          if(response.customer){

          }
      });        
    } else {
      console.log("incorrect password");
    }
  }
}
