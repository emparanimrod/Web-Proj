import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  itemCount: any;
  total: any;

  constructor( protected storage: AsyncLocalStorage,
               private router: Router ) { }

  ngOnInit() {
    this.storage.getItem('cart').subscribe((data)=>{
      console.log('menu cart', data);
     this.itemCount = data.length;
      this.cartItems = data;
      this.total = 0.00;
   
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
