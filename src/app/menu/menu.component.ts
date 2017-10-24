import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(dConfig: NgbDropdownConfig) {

    dConfig.placement= 'bottom-left';

  
   }

  ngOnInit() {
  }
  
  
}
