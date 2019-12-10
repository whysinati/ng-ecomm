import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { menu } from '../menu';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item;

  addToOrder(item) {window.alert('Item added to order!');
    this.orderService.addToOrder(item);
  }

  delFromOrder(item) {window.alert('Item removed from order!');
    this.orderService.delFromOrder(item);
  }

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
    //initial test method of the order service
    // console.log(this.orderService.test());
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = menu[+params.get('itemId')];
    });
  }

}
