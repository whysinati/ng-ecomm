import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //future functionality

import { menu } from '../menu';
import { OrderService } from '../services/order.service'; //future functionality

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent { // implements OnInit {
  menu = menu;

  share() {
    window.alert('This menu item has been shared!');
  }

  onNotify() {
    window.alert('One of your favorites is on special!');
  }

  //future functionality
  item;

  addToOrder(item) {window.alert('Item added to order!');
    this.orderService.addToOrder(item);
  }

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
    //initial test method of the order service
    // console.log(this.orderService.test());
   }

  // constructor() { }

  // ngOnInit() {
  // }

}
