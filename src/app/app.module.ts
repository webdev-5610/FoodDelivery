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
import { HomeComponent } from './components/website/home/home.component';
import { RestaurantComponent } from './components/website/restaurant/restaurant.component';
import { LoginComponent } from './components/website/login/login.component';
import { RegisterComponent } from './components/website/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantHomeComponent } from './components/restaurant/restaurant-home/restaurant-home.component';
import { MenuEditComponent } from './components/restaurant/menu-edit/menu-edit.component';
import { RestaurantOrderHistoryComponent } from './components/restaurant/restaurant-order-history/order-history.component';
import {MatRadioModule} from '@angular/material/radio';
import {UserService} from './services/user.service.client';
import {RestaurantService} from './services/restaurant.service.client';
import {OrderService} from './services/order.service.client';
import {WebsiteService} from './services/website.service.client';
import {SharedService} from './services/shared.service';
import { CurrentOrderComponent } from './components/restaurant/current-order/current-order.component';
import {AuthGuard} from './services/auth-guard.service';
import { DetailComponent } from './components/deliver/detail/detail.component';
import { DeliverHomeComponent } from './components/deliver/home/home.component';
import { DeliverService } from './services/deliver.service.client';
import { AgmDirectionModule} from 'agm-direction'; // agm-direction
import { AgmCoreModule } from '@agm/core';
import {MenuService} from './services/menu.service.client';
import {UsermenuComponent} from './components/user/menu/menu.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
    UserProfileComponent,
    OrderhistoryComponent,
    CheckoutComponent,
    OrderComponent,
    RestaurantProfileComponent,
    MenuComponent,
    RestaurantComponent,
    RestaurantHomeComponent,
    MenuEditComponent,
    RestaurantOrderHistoryComponent,
    DetailComponent,
    DeliverHomeComponent,
    CurrentOrderComponent,
    UsermenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    FormsModule,
    // QuillEditorModule
    MatRadioModule,
    AgmDirectionModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtrCeFbuL6cSgjC2UyJsaJuJoXKXAmQQM', libraries: ['geometry']})
  ],
  providers: [UserService, RestaurantService, OrderService, WebsiteService, SharedService, AuthGuard, DeliverService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
