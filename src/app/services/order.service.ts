import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  items = [];

  addToOrder(item){
    this.items.push(item); //add item to the order
  }

  delFromOrder(item){
    const index = this.items.indexOf(item);
    this.items.splice(index, 1); //remove item from order
  }

  //add functionality to adjust item quantities

  getItems(){
    return this.items; //show items on the order
  };

  clearOrder(){
    this.items = []; //empty the items array
    return this.items;// return this.getItems(); //return this.items //show empty order
  };

  getExtrasCosts() {
    return this.http.get('/assets/extras.json');
  }

  constructor(
    private http: HttpClient
  ) { }
  //initial test method of the order service
  // test(): string{
  //   return 'success!';
  // }
}
