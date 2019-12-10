import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  items;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.items = this.orderService.getItems();
  }

}
