import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total: any;
  cartItems: any;
  itemCount: any;

  constructor(protected storage: AsyncLocalStorage,
              private router: Router) { }

  ngOnInit() {
    this.total = 0.00;
    //cart
 this.storage.getItem('cart').subscribe((data)=>{
   console.log('checkout', data);
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


}
