import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {//implements OnInit {
  items;
  orderForm;

  delFromOrder(item) {window.alert('Item removed from order!');
    this.orderService.delFromOrder(item);
  }

  clearOrder() {window.alert('Order cleared!');
    this.items = this.orderService.clearOrder(); //empty the items array 
    //the above must have 'this.items =' re-assignment to properly display empty cart after
    // return this.items; //show empty order
    // this.orderService.getItems();
  };

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
  ) { 
    this.items = this.orderService.getItems();

    this.orderForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  // ngOnInit() {
  //   this.items = this.orderService.getItems();
  // }

  onSubmit(customerData) {
    //Process order submission data here
    //e.g. submit the data to an external server
    console.warn('Your order has been submitted!', customerData);

    this.items = this.orderService.clearOrder();
    this.orderForm.reset();
  }
}
