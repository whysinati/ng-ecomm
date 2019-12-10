import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderComponent } from "./order/order.component";
import { ExtrasComponent } from "./extras/extras.component";

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu/:itemId', component: ItemDetailsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'extras', component: ExtrasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
