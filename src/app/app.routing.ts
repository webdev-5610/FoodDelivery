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
// Import all other components here
const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'searchbyaddress', component: SearchbyaddressComponent},
  {path: 'searchbyaddress/type', component: SearchbytypeComponent},
  {path: 'restaurant/:rid', component: RestaurantProfileComponent},
  {path: 'user/:uid/profile', component: UserProfileComponent},
  {path: 'user/:uid/orderhistory', component: OrderhistoryComponent},
  {path: 'user/:uid/restaurant/:rid/checkout', component: CheckoutComponent},
  {path: 'user/:uid/order/:oid', component: OrderComponent},
  {path: 'restaurant/:rid/profile', component: RestaurantProfileComponent},
  {path: 'restaurant/:rid/menu', component: MenuComponent},
  // {path: 'restaurant/:rid/statistics', component: StatisticsComponent},

  // so on
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
