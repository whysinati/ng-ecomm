import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent implements OnInit {
  extrasCosts;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.extrasCosts = this.orderService.getExtrasCosts();
  }

}
