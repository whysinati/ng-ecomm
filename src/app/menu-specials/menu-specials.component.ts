import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-menu-specials',
  templateUrl: './menu-specials.component.html',
  styleUrls: ['./menu-specials.component.scss']
})
export class MenuSpecialsComponent implements OnInit {
  @Input() item;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
