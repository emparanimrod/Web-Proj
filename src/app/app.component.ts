import { Component } from '@angular/core';
import * as WC from 'woocommerce-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mtush Web';
  WooCommerce: any; 
  categories: any[];


ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  
}


    

}
