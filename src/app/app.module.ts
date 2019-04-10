import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {Routing} from './app.routing';
import {QuillEditorModule} from 'ngx-quill-editor/quillEditor.module';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { OrderhistoryComponent } from './components/user/orderhistory/orderhistory.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';
import { OrderComponent } from './components/user/order/order.component';
import { RestaurantProfileComponent } from './components/restaurant/restaurant-profile/restaurant-profile.component';
import { MenuComponent } from './components/restaurant/menu/menu.component';
import { StatisticsComponent } from './components/restaurant/statistics/statistics.component';
import { HomeComponent } from './components/website/home/home.component';
import { SearchbyaddressComponent } from './components/website/searchbyaddress/searchbyaddress.component';
import { SearchbytypeComponent } from './components/website/searchbytype/searchbytype.component';
import { RestaurantComponent } from './components/website/restaurant/restaurant.component';
import {LoginComponent} from "./components/website/login/login.component";
import {RegisterComponent} from "./components/website/register/register.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
    UserProfileComponent,
    OrderhistoryComponent,
    CheckoutComponent,
    OrderComponent,
    RestaurantProfileComponent,
    MenuComponent,
    StatisticsComponent,
    HomeComponent,
    SearchbyaddressComponent,
    SearchbytypeComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    FormsModule,
    // QuillEditorModule
  ],
  // providers: [UserService,],
  bootstrap: [AppComponent]
})
export class AppModule {
}
