import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuSpecialsComponent } from './menu-specials/menu-specials.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderComponent } from './order/order.component';
import { ExtrasComponent } from './extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuComponent,
    MenuSpecialsComponent,
    ItemDetailsComponent,
    OrderComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
