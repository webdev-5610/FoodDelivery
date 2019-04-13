import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from "./components/website/home/home.component";
import {LoginComponent} from "./components/website/login/login.component";
import {SearchbyaddressComponent} from "./components/website/searchbyaddress/searchbyaddress.component";
import {SearchbytypeComponent} from "./components/website/searchbytype/searchbytype.component";
import {RestaurantComponent} from "./components/website/restaurant/restaurant.component";
import {UserProfileComponent} from "./components/user/user-profile/user-profile.component";
import {OrderhistoryComponent} from "./components/user/orderhistory/orderhistory.component";
import {CheckoutComponent} from "./components/user/checkout/checkout.component";
import {OrderComponent} from "./components/user/order/order.component";
import {RestaurantProfileComponent} from "./components/restaurant/restaurant-profile/restaurant-profile.component";
import {MenuComponent} from "./components/restaurant/menu/menu.component";
import {RegisterComponent} from "./components/website/register/register.component";
import {RestaurantHomeComponent} from "./components/restaurant/restaurant-home/restaurant-home.component";
import {RestaurantOrderHistoryComponent} from "./components/restaurant/order-history/order-history.component";
import {RestaurantOrderCurrentComponent} from "./components/restaurant/order-current/order-current.component";
import {MenuEditComponent} from "./components/restaurant/menu-edit/menu-edit.component";
// Import all other components here
const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
    //restaurant
  {path: 'restaurant/home', component: RestaurantHomeComponent},
  {path: 'restaurant/profile', component: RestaurantProfileComponent},
  {path: 'restaurant/orderhistory', component: RestaurantOrderHistoryComponent},
  {path: 'restaurant/currentorder', component: RestaurantOrderCurrentComponent},
  {path: 'restaurant/menu', component: MenuComponent},
  {path: 'restaurant/menu/:dishid', component: MenuEditComponent},
    //user
  {path: 'user/:uid/home', component: UserProfileComponent},
  {path: 'user/:uid/profile', component: UserProfileComponent},
  {path: 'user/:uid/checkout', component: CheckoutComponent},
  {path: 'user/:uid/orderhistory', component: OrderhistoryComponent},
  {path: 'user/:uid/order/:oid', component: OrderComponent},
  //delivery
  {path: 'delivery/:did/home', component: UserProfileComponent},
  {path: 'delivery/:did/profile', component: UserProfileComponent},
  {path: 'delivery/:did/pendingorder', component: OrderhistoryComponent},
  {path: 'delivery/:did/ondelivery', component: OrderComponent},
    //order-history

    //admin


  // so on
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
