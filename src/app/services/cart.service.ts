import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class CartService {

  cartItems: any;

  constructor(protected storage: AsyncLocalStorage) { 

    this.storage.getItem('cart').subscribe((data) =>{
      
      console.log(data)
          this.cartItems = data;
         })

  }

  getCart(){
    
this.storage.getItem('cart').subscribe((data) =>{
        console.log(data)
     return this.cartItems = data;
     })
   
  }
}
