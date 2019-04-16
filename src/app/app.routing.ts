import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from "./components/website/home/home.component";
import {LoginComponent} from "./components/website/login/login.component";
import {UserProfileComponent} from "./components/user/user-profile/user-profile.component";
import {OrderhistoryComponent} from "./components/user/orderhistory/orderhistory.component";
import {CheckoutComponent} from "./components/user/checkout/checkout.component";
import {OrderComponent} from "./components/user/order/order.component";
import {RestaurantProfileComponent} from "./components/restaurant/restaurant-profile/restaurant-profile.component";
import {MenuComponent} from "./components/restaurant/menu/menu.component";
import {RegisterComponent} from "./components/website/register/register.component";
import {RestaurantHomeComponent} from "./components/restaurant/restaurant-home/restaurant-home.component";
import {RestaurantOrderHistoryComponent} from "./components/restaurant/restaurant-order-history/order-history.component";
import {CurrentOrderComponent} from "./components/restaurant/current-order/current-order.component";
import {MenuEditComponent} from "./components/restaurant/menu-edit/menu-edit.component";
import { DetailComponent } from './components/deliver/detail/detail.component';
import { DeliverHomeComponent } from './components/deliver/home/home.component';
import {AuthGuard} from "./services/auth-guard.service";
// Import all other components here
const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
    //employee

    //restaurant
  {path: 'restaurant/home', component: RestaurantHomeComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/profile', component: RestaurantProfileComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/orderhistory', component: RestaurantOrderHistoryComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/currentorders', component: CurrentOrderComponent, canActivate: [AuthGuard]},
  {path: 'restaurant/menu', component: MenuComponent,canActivate: [AuthGuard]},
  {path: 'restaurant/menu/:dishid', component: MenuEditComponent,canActivate: [AuthGuard]},
    //user
  {path: 'user/:uid/home', component: UserProfileComponent},
  {path: 'user/:uid/profile', component: UserProfileComponent},
  {path: 'user/:uid/checkout', component: CheckoutComponent},
  {path: 'user/:uid/orderhistory', component: OrderhistoryComponent},
  {path: 'user/:uid/order/:oid', component: OrderComponent},
  //delivery
  {path: 'deliver/:uid/home', component: DeliverHomeComponent},
  {path: 'deliver/:uid/detail/:oid', component: DetailComponent},
    //order-history
  {path: 'delivery/:did/home', component: UserProfileComponent},
  {path: 'delivery/:did/profile', component: UserProfileComponent},
  {path: 'delivery/:did/pendingorder', component: OrderhistoryComponent},
  {path: 'delivery/:did/ondelivery', component: OrderComponent},
    //restaurant-order-history

    //admin


  // so on
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});
