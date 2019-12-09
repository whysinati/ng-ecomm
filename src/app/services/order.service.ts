import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  items = [];

  addToOrder(item){
    this.items.push(item); //add item to the order
  }

  //add functionality to adjust item quantities
  //add functionality to delete items

  getItems(){
    return this.items; //show items on the order
  };

  clearOrder(){
    this.items = []; //empty the items array
    return this.items; //show empty order
  };

  constructor() { }
  //initial test method of the order service
  // test(): string{
  //   return 'success!';
  // }
}
