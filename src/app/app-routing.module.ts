import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderComponent } from "./order/order.component";
import { ExtrasComponent } from "./extras/extras.component";

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu/:itemId', component: ItemDetailsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'extras', component: ExtrasComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
