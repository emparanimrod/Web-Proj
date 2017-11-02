import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  loggedIn: boolean;
  constructor() { }

  ngOnInit() {
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
