import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { menu } from '../menu';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = menu[+params.get('itemId')];
    });
  }

}
