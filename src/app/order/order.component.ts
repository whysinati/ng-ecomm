import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {//implements OnInit {
  items;

  delFromOrder(item) {window.alert('Item removed from order!');
    this.orderService.delFromOrder(item);
  }

  clearOrder() {window.alert('Order cleared!');
    this.orderService.clearOrder(); //empty the items array
    // return this.items; //show empty order
    // this.orderService.getItems();
  };

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.items = this.orderService.getItems();
  }

}
