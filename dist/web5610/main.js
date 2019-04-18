(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web5610';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/orderhistory/orderhistory.component */ "./src/app/components/user/orderhistory/orderhistory.component.ts");
/* harmony import */ var _components_user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/checkout/checkout.component */ "./src/app/components/user/checkout/checkout.component.ts");
/* harmony import */ var _components_user_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/order/order.component */ "./src/app/components/user/order/order.component.ts");
/* harmony import */ var _components_restaurant_restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/restaurant/restaurant-profile/restaurant-profile.component */ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.ts");
/* harmony import */ var _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/restaurant/menu/menu.component */ "./src/app/components/restaurant/menu/menu.component.ts");
/* harmony import */ var _components_website_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/website/home/home.component */ "./src/app/components/website/home/home.component.ts");
/* harmony import */ var _components_website_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/website/restaurant/restaurant.component */ "./src/app/components/website/restaurant/restaurant.component.ts");
/* harmony import */ var _components_website_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/website/login/login.component */ "./src/app/components/website/login/login.component.ts");
/* harmony import */ var _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/website/register/register.component */ "./src/app/components/website/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/restaurant/restaurant-home/restaurant-home.component */ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.ts");
/* harmony import */ var _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/restaurant/menu-edit/menu-edit.component */ "./src/app/components/restaurant/menu-edit/menu-edit.component.ts");
/* harmony import */ var _components_restaurant_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/restaurant/restaurant-order-history/order-history.component */ "./src/app/components/restaurant/restaurant-order-history/order-history.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _services_order_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/order.service.client */ "./src/app/services/order.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _components_restaurant_current_order_current_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/restaurant/current-order/current-order.component */ "./src/app/components/restaurant/current-order/current-order.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_menu_service_client__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/menu.service.client */ "./src/app/services/menu.service.client.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_website_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_website_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _components_user_orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_7__["OrderhistoryComponent"],
                _components_user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _components_user_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
                _components_restaurant_restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantProfileComponent"],
                _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _components_website_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_13__["RestaurantComponent"],
                _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_17__["RestaurantHomeComponent"],
                _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_18__["MenuEditComponent"],
                _components_restaurant_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_19__["RestaurantOrderHistoryComponent"],
                _components_restaurant_current_order_current_order_component__WEBPACK_IMPORTED_MODULE_26__["CurrentOrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // QuillEditorModule
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_22__["RestaurantService"], _services_menu_service_client__WEBPACK_IMPORTED_MODULE_28__["MenuService"], _services_order_service_client__WEBPACK_IMPORTED_MODULE_23__["OrderService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_24__["WebsiteService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_25__["SharedService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_website_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/website/home/home.component */ "./src/app/components/website/home/home.component.ts");
/* harmony import */ var _components_website_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/website/login/login.component */ "./src/app/components/website/login/login.component.ts");
/* harmony import */ var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/orderhistory/orderhistory.component */ "./src/app/components/user/orderhistory/orderhistory.component.ts");
/* harmony import */ var _components_user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/checkout/checkout.component */ "./src/app/components/user/checkout/checkout.component.ts");
/* harmony import */ var _components_user_order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/order/order.component */ "./src/app/components/user/order/order.component.ts");
/* harmony import */ var _components_restaurant_restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/restaurant/restaurant-profile/restaurant-profile.component */ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.ts");
/* harmony import */ var _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/register/register.component */ "./src/app/components/website/register/register.component.ts");
/* harmony import */ var _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/restaurant/restaurant-home/restaurant-home.component */ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.ts");
/* harmony import */ var _components_restaurant_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/restaurant/restaurant-order-history/order-history.component */ "./src/app/components/restaurant/restaurant-order-history/order-history.component.ts");
/* harmony import */ var _components_restaurant_current_order_current_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/restaurant/current-order/current-order.component */ "./src/app/components/restaurant/current-order/current-order.component.ts");
/* harmony import */ var _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/restaurant/menu-edit/menu-edit.component */ "./src/app/components/restaurant/menu-edit/menu-edit.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/restaurant/menu/menu.component */ "./src/app/components/restaurant/menu/menu.component.ts");















// Import all other components here
var APP_ROUTES = [
    { path: '', component: _components_website_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_website_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    //employee
    //restaurant
    { path: 'restaurant/home', component: _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantHomeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'restaurant/profile', component: _components_restaurant_restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'restaurant/orderhistory', component: _components_restaurant_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantOrderHistoryComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'restaurant/currentorders', component: _components_restaurant_current_order_current_order_component__WEBPACK_IMPORTED_MODULE_11__["CurrentOrderComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'restaurant/menu', component: _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'restaurant/menu/:did', component: _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_12__["MenuEditComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    //user
    { path: 'user/:uid/home', component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
    { path: 'user/:uid/profile', component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
    { path: 'user/:uid/checkout', component: _components_user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"] },
    { path: 'user/:uid/orderhistory', component: _components_user_orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_4__["OrderhistoryComponent"] },
    { path: 'user/:uid/order/:oid', component: _components_user_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"] },
    //delivery
    { path: 'delivery/:did/home', component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
    { path: 'delivery/:did/profile', component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"] },
    { path: 'delivery/:did/pendingorder', component: _components_user_orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_4__["OrderhistoryComponent"] },
    { path: 'delivery/:did/ondelivery', component: _components_user_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"] },
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/restaurant/current-order/current-order.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/restaurant/current-order/current-order.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9jdXJyZW50LW9yZGVyL2N1cnJlbnQtb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/restaurant/current-order/current-order.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/restaurant/current-order/current-order.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a class=\"navbar-brand cl-text-black cl-icon-padding\"\n         routerLink=\"../home\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n        Menu\n      </h1>\n    </div>\n    <a class=\"navbar-brand cl-text-black float-right cl-icon-padding\"\n       routerLink=\"./new\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding-more\">\n  <div id=\"accordion\">\n    <!--<div *ngFor=\"let order of orders\">-->\n\n      <!--<div class=\"card\">-->\n        <!--<div class=\"card-header\" id=\"{{order._id}}\">-->\n          <!--<h5 class=\"mb-0\">-->\n            <!--<button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\"-->\n                    <!--aria-expanded=\"true\" aria-controls=\"collapseOne\">-->\n              <!--{{order.time}}  Customer:{{order.user}}-->\n            <!--</button>-->\n          <!--</h5>-->\n\n          <!--<div class=\"float-right\">-->\n            <!--<button class=\"btn btn-primary btn-small\" [style.color]=\"buttoncolor\"-->\n                    <!--(click)=\"sendtoAlldelivery(order)\"-->\n                    <!--type=\"submit\">Send to Delivery-->\n            <!--</button>-->\n            <!--<button class=\"btn btn-danger btn-small\" [style.color]=\"buttoncolor\"-->\n                    <!--(click)=\"cancalOrder(order)\"-->\n                    <!--type=\"submit\">Cancle Order-->\n            <!--</button>-->\n          <!--</div>-->\n        <!--</div>-->\n\n        <!--<div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"{{order._id}}\" data-parent=\"#accordion\">-->\n          <!--<div class=\"card-body\">-->\n            <!--<table class=\"table\">-->\n              <!--<thead class=\"thead-light\">-->\n              <!--<tr>-->\n                <!--<th scope=\"col\">#</th>-->\n                <!--<th scope=\"col\">Name</th>-->\n                <!--<th scope=\"col\">Quantity</th>-->\n              <!--</tr>-->\n              <!--</thead>-->\n              <!--<tbody *ngFor=\"let dish of order.details.dish; index as i\">-->\n\n              <!--<tr>-->\n                <!--<th scope=\"row\">{{i+1}}</th>-->\n                <!--<td>{{dish}}</td>-->\n                <!--<td>{{order.details.quantity[i]}}</td>-->\n              <!--</tr>-->\n\n              <!--</tbody>-->\n            <!--</table>-->\n          <!--</div>-->\n        <!--</div>-->\n\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n</div>\n\n\n    <nav class=\"navbar fixed-bottom cl-grey-navbar\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n          <i class=\"fas fa-user cl-text-blue\"></i>\n        </a>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/components/restaurant/current-order/current-order.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/restaurant/current-order/current-order.component.ts ***!
  \********************************************************************************/
/*! exports provided: CurrentOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentOrderComponent", function() { return CurrentOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_order_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service.client */ "./src/app/services/order.service.client.ts");






var CurrentOrderComponent = /** @class */ (function () {
    function CurrentOrderComponent(restaurantService, orderService, route, router, sharedService) {
        this.restaurantService = restaurantService;
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
    }
    CurrentOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeId = this.sharedService.user._id;
        this.orderService.findOrdersbyStatus(1).subscribe(function (orders) {
            _this.orders = orders;
            console.log(_this.orders);
        });
    };
    CurrentOrderComponent.prototype.sendtoAlldelivery = function (order) {
        this.orderService.updateOrderStatus(order._id, 2, order);
        //this.buttoncolor = '#808389';
    };
    CurrentOrderComponent.prototype.cancalOrder = function (order) { };
    CurrentOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-order',
            template: __webpack_require__(/*! ./current-order.component.html */ "./src/app/components/restaurant/current-order/current-order.component.html"),
            styles: [__webpack_require__(/*! ./current-order.component.css */ "./src/app/components/restaurant/current-order/current-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"],
            _services_order_service_client__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], CurrentOrderComponent);
    return CurrentOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/menu-edit/menu-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/restaurant/menu-edit/menu-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9tZW51LWVkaXQvbWVudS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/restaurant/menu-edit/menu-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/restaurant/menu-edit/menu-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger text-center\">\n  {{errorMsg}}\n</div>\n<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"..\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n        Dish Edit\n      </h1>\n    </div>\n    <a (click)=\"updateDish()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"dish-name\">Name</label>\n      <input [(ngModel)]=\"dish.dish_name\"\n             name = \"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"dish-name\"\n             placeholder=\"name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"dish-price\">Price</label>\n      <span>$</span>\n      <input [(ngModel)]=\"dish.price\"\n             name=\"width\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"dish-price\"\n             placeholder=\"Price\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"dish-description\">Description</label>\n      <textarea [(ngModel)]=\"dish.description\" name=\"description\" id=\"dish-description\" class=\"form-control\" rows=\"3\"\n                placeholder=\"Description\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"dish.url\"\n             type=\"text\"\n             name=\"url\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             placeholder=\"{{dish.url}}\"\n             ngModel required\n             #url=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\"   type=\"file\" class=\"form-control\"  id=\"exampleInputFile\"/>\n        <input  name=\"dishId\" value=\"{{dishId}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n        <br/>\n      </form>\n    </div>\n  </form>\n\n  <button class=\"btn btn-danger  btn-block\" (click)=\"deleteDish()\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"restaurant/home\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/restaurant/menu-edit/menu-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/restaurant/menu-edit/menu-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEditComponent", function() { return MenuEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_menu_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/menu.service.client */ "./src/app/services/menu.service.client.ts");







var MenuEditComponent = /** @class */ (function () {
    function MenuEditComponent(activatedRoute, sharedService, menuService, route) {
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.menuService = menuService;
        this.route = route;
        this.dish = {};
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.dishErrorMsg = "Dish name can't be empty!";
        this.priceErrorMsg = "Price can't be empty!";
        //this.dish = new Menu('',  '',0,'','');
    }
    MenuEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishErrorFlag = false;
        this.priceErrorFlag = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.dishId = params['did'];
        });
        if (this.dishId !== 'new') {
            this.menuService.findDishById(this.dishId).subscribe(function (dish) {
                _this.dish = dish;
            });
        }
    };
    MenuEditComponent.prototype.updateDish = function () {
        var _this = this;
        if (!this.dish.dish_name) {
            this.dishErrorFlag = true;
            return;
        }
        if (!this.dish.price) {
            this.priceErrorFlag = true;
            return;
        }
        if (this.dishId === 'new') {
            this.menuService.createDish(this.dish).subscribe(function (dish) {
                console.log('create dish !');
                _this.route.navigate(['../'], { relativeTo: _this.activatedRoute });
            }, function (error) { return console.log(error); });
        }
        else {
            this.menuService.updateDish(this.dish._id, this.dish).subscribe(function (dish) {
                console.log('update dish !');
                _this.route.navigate(['../'], { relativeTo: _this.activatedRoute });
            }, function (error) { return console.log(error); });
        }
    };
    MenuEditComponent.prototype.deleteDish = function () {
        var _this = this;
        this.menuService.deleteDish(this.dishId).subscribe(function () { return _this.route.navigate(['../'], { relativeTo: _this.activatedRoute }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], MenuEditComponent.prototype, "imageForm", void 0);
    MenuEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-edit',
            template: __webpack_require__(/*! ./menu-edit.component.html */ "./src/app/components/restaurant/menu-edit/menu-edit.component.html"),
            styles: [__webpack_require__(/*! ./menu-edit.component.css */ "./src/app/components/restaurant/menu-edit/menu-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _services_menu_service_client__WEBPACK_IMPORTED_MODULE_6__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuEditComponent);
    return MenuEditComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/menu/menu.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/restaurant/menu/menu.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/restaurant/menu/menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/restaurant/menu/menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"../home\"\n         class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n        Menu\n      </h1>\n    </div>\n    <a routerLink=\"./new\"\n       class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding-more\">\n  <div appSortable (newIndexes) = \"onNewIndexes($event)\">\n    <div *ngFor=\"let dish of dishes\">\n      <div class=\"float-right\">\n        <a class=\"float-right cl-text-blue fa fa-bars\"></a>\n        <a routerLink=\"/restaurant/menu/{{dish._id}}\"\n           class=\"fa fa-cog cl-text-blue\"></a>\n      </div>\n      <p>{{dish.dish_name}}</p>\n      <p>{{dish.price}}</p>\n      <p>{{dish.description}}</p>\n      <img class=\"img-responsive img-rounded cl-widget-images\" src=\"{{dish.url}}\">\n\n    </div>\n</div>\n</div>\n\n  <nav class=\"navbar fixed-bottom cl-grey-navbar\">\n    <div class=\"container-fluid\">\n      <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n        <i class=\"fas fa-user cl-text-blue\"></i>\n      </a>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/restaurant/menu/menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/restaurant/menu/menu.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_menu_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/menu.service.client */ "./src/app/services/menu.service.client.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, sharedService, router, route) {
        this.menuService = menuService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.startIndex = 0;
        this.endIndex = 0;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.userId = this.sharedService.user._id;
        this.menuService.findAllDishesForRestaurant().subscribe(function (dishes) {
            _this.dishes = dishes;
            console.log(_this.dishes);
        });
    };
    MenuComponent.prototype.onNewIndexes = function (newIndexes) {
        this.startIndex = newIndexes.startIndex;
        this.endIndex = newIndexes.endIndex;
        this.menuService.reorderDishes(this.startIndex, this.endIndex, this.dishes)
            .subscribe();
    };
    MenuComponent.prototype.refresh = function () {
        this.router.navigate(['restaurant/menu']);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/restaurant/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/restaurant/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_menu_service_client__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-home/restaurant-home.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9yZXN0YXVyYW50LWhvbWUvcmVzdGF1cmFudC1ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-home/restaurant-home.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger text-center\">\n  {{errorMsg}}\n</div>\n\n<body>\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <h1 class=\"cl-text-white navbar-brand cl-text-bold\">\n        Restaurant Home Page\n      </h1>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"/restaurant/currentorders\">Current Orders\n  </button>\n  <br/>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"/restaurant/profile\">Profile\n  </button>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"/restaurant/menu\">Menu\n  </button>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"/restaurant/orderhistory\">Order History\n  </button>\n  <button class=\"btn btn-danger  btn-block\"\n          (click)=\"logout()\" routerLinkActive=\"active\">Logout\n  </button>\n  <button class=\"btn btn-danger  btn-block\"\n          (click)=\"deleteUser()\" routerLinkActive=\"active\">Delete\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-home/restaurant-home.component.ts ***!
  \************************************************************************************/
/*! exports provided: RestaurantHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantHomeComponent", function() { return RestaurantHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_restaurant_client_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/restaurant.client.model */ "./src/app/model/restaurant.client.model.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");







var RestaurantHomeComponent = /** @class */ (function () {
    function RestaurantHomeComponent(restaurantService, userService, route, router, sharedService) {
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.restaurant = new _model_restaurant_client_model__WEBPACK_IMPORTED_MODULE_5__["Restaurant"]('', '', '', '', '', '', '', [], []);
    }
    RestaurantHomeComponent.prototype.ngOnInit = function () {
        this.restaurant = this.sharedService.user;
        this.restaurantId = this.sharedService.user._id;
    };
    RestaurantHomeComponent.prototype.deleteUser = function () {
        var _this = this;
        this.restaurantService.deleteRestaurant(this.restaurant._id).subscribe(function (restaurant) {
            console.log('delete user: ' + _this.restaurant._id);
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    RestaurantHomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) {
            _this.sharedService.user = null;
            _this.router.navigate(['/login']);
        });
    };
    RestaurantHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-home',
            template: __webpack_require__(/*! ./restaurant-home.component.html */ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-home.component.css */ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], RestaurantHomeComponent);
    return RestaurantHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/restaurant-order-history/order-history.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-order-history/order-history.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9yZXN0YXVyYW50LW9yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/restaurant/restaurant-order-history/order-history.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-order-history/order-history.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n    <div class=\"container-fluid\">\n        <div>\n            <a routerLink=\"../home\"\n               class=\"navbar-brand cl-text-black cl-icon-padding\">\n                <i class=\"fas fa-angle-left\"></i>\n            </a>\n            <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n                Order History\n            </h1>\n        </div>\n        <a routerLink=\"./new\"\n           class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n            <i class=\"fas fa-plus\"></i>\n        </a>\n    </div>\n</nav>\n\n<div class=\"container cl-container-padding-more\">\n\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Total</th>\n            <th scope=\"col\">Details</th>\n        </tr>\n        </thead>\n\n        <tbody *ngFor=\"let order of orders; index as i\">\n        <tr>\n            <th scope=\"row\">{{i + 1}}</th>\n            <td>{{order.time}}</td>\n            <td>{{order.user}}</td>\n            <td>{{order.details.total}}</td>\n            <td><a routerLink=\"/restaurant/order/{{order._id}}\" class=\"badge badge-info\">click to view</a></td>\n        </tr>\n        </tbody>\n    </table>\n\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n    <div class=\"container-fluid\">\n        <a routerLink=\"restaurant/home\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n            <i class=\"fas fa-user cl-text-blue\"></i>\n        </a>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/restaurant/restaurant-order-history/order-history.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-order-history/order-history.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RestaurantOrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantOrderHistoryComponent", function() { return RestaurantOrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/order.service.client */ "./src/app/services/order.service.client.ts");





var RestaurantOrderHistoryComponent = /** @class */ (function () {
    function RestaurantOrderHistoryComponent(orderService, sharedService, router, route) {
        this.orderService = orderService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    RestaurantOrderHistoryComponent.prototype.ngOnInit = function () {
        this.employeeId = this.sharedService.user._id;
        // this.orderService.findAllOrders().subscribe(
        //     (orders: any) => {
        //       this.orders = orders;
        //     }
        // )
    };
    RestaurantOrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/components/restaurant/restaurant-order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.css */ "./src/app/components/restaurant/restaurant-order-history/order-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service_client__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RestaurantOrderHistoryComponent);
    return RestaurantOrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9yZXN0YXVyYW50LXByb2ZpbGUvcmVzdGF1cmFudC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\nclass=\"alert alert-danger text-center\">\n{{errorMsg}}\n</div>\n\n<body>\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <h1 class=\"cl-text-white navbar-brand cl-text-bold\">\n        Restaurant Profile\n      </h1>\n    </div>\n\n    <div class=\"navibar-header\">\n      <a (click)=\"updateRestaurant(restaurant)\" style=\"cursor:pointer\" class=\"navbar-brand ml-auto\">\n        <i class=\"fas fa-check cl-text-white\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <p> Account info</p>\n  <div class=\"form-group cl-text-bold\">\n    <label>Username</label>\n    <input [(ngModel)]=\"restaurant.username\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"alice\">\n  </div>\n  <div class=\"form-group cl-text-bold\">\n    <label>Email address</label>\n    <input [(ngModel)]=\"restaurant.email\" name=\"email\" type = \"email\" class=\"form-control\" placeholder=\"abc@gmail.com\">\n  </div>\n  <div class=\"form-group cl-text-bold\">\n    <label>Phone</label>\n    <input [(ngModel)]=\"restaurant.phone\" name=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Alice\">\n  </div>\n\n  <p>Restaurant Information</p>\n  <div class=\"form-group cl-text-bold\">\n    <label>Name</label>\n    <input [(ngModel)]=\"restaurant.name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Wander\">\n  </div>\n\n  <div class=\"form-group cl-text-bold\">\n    <label>Address</label>\n    <input [(ngModel)]=\"restaurant.address\" name=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Wander\">\n  </div>\n  <div class=\"form-group cl-text-bold\">\n    <label>Type</label>\n    <input [(ngModel)]=\"restaurant.type\" name=\"type\" type=\"text\" class=\"form-control\" placeholder=\"Wander\">\n  </div>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"../restaurant/{{restaurant._id}}/website\">Menu\n  </button>\n  <button class=\"btn btn-danger  btn-block\"\n          (click)=\"logout()\" routerLinkActive=\"active\">Logout\n  </button>\n  <!--<button class=\"btn btn-danger  btn-block\"-->\n          <!--(click)=\"deleteUser()\" routerLinkActive=\"active\">Delete-->\n  <!--</button>-->\n\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a href=\"#\" routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n\n</body>\n"

/***/ }),

/***/ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RestaurantProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantProfileComponent", function() { return RestaurantProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _model_restaurant_client_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/restaurant.client.model */ "./src/app/model/restaurant.client.model.ts");






var RestaurantProfileComponent = /** @class */ (function () {
    function RestaurantProfileComponent(restaurantService, route, router, sharedService) {
        this.restaurantService = restaurantService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid email address !';
        this.restaurant = new _model_restaurant_client_model__WEBPACK_IMPORTED_MODULE_5__["Restaurant"]('', '', '', '', '', '', '', [], []);
    }
    RestaurantProfileComponent.prototype.updateRestaurant = function (restaurant) {
        var _this = this;
        this.updateFlag = false;
        this.userErrorFlag = false;
        if (this.username !== this.restaurant.username) {
            this.restaurantService.findRestaurantByUsername(this.username).subscribe(function (restaurant) {
                if (typeof restaurant._id !== 'undefined') {
                    _this.userErrorFlag = true;
                }
                else {
                    _this.restaurant.username = _this.username;
                    _this.updateProfile();
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.updateProfile();
        }
    };
    RestaurantProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.restaurantService.updateRestaurant(this.restaurant._id, this.restaurant).subscribe(function (restaurant) {
            console.log(restaurant);
            _this.restaurant = restaurant;
            _this.updateFlag = true;
        }, function (error) {
            console.log(error);
        });
    };
    RestaurantProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurant = this.sharedService.user;
        this.restaurantId = this.sharedService.user._id;
        this.route.params.subscribe(function (params) {
            _this.updateFlag = false;
            _this.userErrorFlag = false;
            _this.updateMsg = 'Profile updated!';
            _this.userErrorMsg = 'The username already exists! Please use a different name.';
            _this.restaurantService.findRestaurantById(_this.restaurantId).subscribe(function (restaurant) {
                console.log((restaurant));
                _this.restaurant = restaurant;
                _this.username = _this.restaurant.username;
            }, function (error) { return console.log(error); });
        });
    };
    RestaurantProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-profile',
            template: __webpack_require__(/*! ./restaurant-profile.component.html */ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-profile.component.css */ "./src/app/components/restaurant/restaurant-profile/restaurant-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], RestaurantProfileComponent);
    return RestaurantProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/checkout/checkout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/checkout/checkout.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/checkout/checkout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/checkout/checkout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  checkout works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/checkout/checkout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/checkout/checkout.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/user/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/user/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/user/order/order.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/order/order.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/order/order.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/order/order.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/order/order.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/order/order.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/user/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/user/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/user/orderhistory/orderhistory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/orderhistory/orderhistory.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9vcmRlcmhpc3Rvcnkvb3JkZXJoaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/orderhistory/orderhistory.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/orderhistory/orderhistory.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orderhistory works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/orderhistory/orderhistory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/orderhistory/orderhistory.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryComponent", function() { return OrderhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderhistoryComponent = /** @class */ (function () {
    function OrderhistoryComponent() {
    }
    OrderhistoryComponent.prototype.ngOnInit = function () {
    };
    OrderhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderhistory',
            template: __webpack_require__(/*! ./orderhistory.component.html */ "./src/app/components/user/orderhistory/orderhistory.component.html"),
            styles: [__webpack_require__(/*! ./orderhistory.component.css */ "./src/app/components/user/orderhistory/orderhistory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderhistoryComponent);
    return OrderhistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/website/home/home.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/website/home/home.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/website/home/home.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/website/home/home.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome to our restaurant !\n</p>\n<P>some photos and descrption here</P>\n\n<button class=\"btn btn-primary btn-block\"\n        type=\"submit\"\n        routerLink=\"/login\">Login\n</button>\n\n<button class=\"btn btn-primary btn-block\"\n        type=\"submit\"\n        routerLink=\"/register\">Register\n</button>\n\n<!--<button class=\"btn btn-primary btn-block\"-->\n        <!--type=\"submit\"-->\n        <!--routerLink=\"/menu\">View Menu-->\n<!--</button>-->\n"

/***/ }),

/***/ "./src/app/components/website/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/website/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/website/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/website/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/website/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/website/login/login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n    display: flex;\n    flex-direction: row;\n    margin: 15px 0;\n}\n\n.example-radio-button {\n    margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/website/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/website/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n    {{errorMsg}}\n</div>\n<div class=\"container\">\n    <h1>Login</h1>\n\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n        <input placeholder=\"username\"\n               name=\"username\"\n               type=\"text\"\n               class=\"form-control\"\n               ngModel\n               required\n               #username=\"ngModel\"/>\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n\n        <input placeholder=\"password\"\n               name=\"password\"\n               type=\"password\"\n               class=\"form-control\"\n               ngModel\n               required\n               #password=\"ngModel\"/>\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n\n        <label id=\"example-radio-group-label\">Login as</label>\n        <mat-radio-group\n                aria-labelledby=\"example-radio-group-label\"\n                class=\"example-radio-group\"\n                [(ngModel)]=\"loginrole\"[ngModelOptions]=\"{standalone: true}\">\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let role of roles\" [value]=\"role\">\n                {{role}}\n            </mat-radio-button>\n        </mat-radio-group>\n\n        <button class=\"btn btn-primary btn-block\"\n                type=\"submit\"\n                [disabled]=\"!f.valid\">Login\n        </button>\n        <button class=\"btn btn-success btn-block\"\n                routerLink=\"/register\"\n                type=\"submit\">Register\n        </button>\n    </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/website/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/website/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.roles = ['Customer', 'Employee', 'Delivery', 'Admin'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('Login page!' + this.username);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('data', this.username);
        this.userService.login(this.username, this.password, this.loginrole).subscribe(function (data) {
            _this.sharedService.user = data;
            if (_this.loginrole === 'Customer') {
                _this.router.navigate(['user/home']);
            }
            else if (_this.loginrole === 'Employee') {
                _this.router.navigate(['restaurant/home']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/website/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/website/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/website/register/register.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/website/register/register.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/website/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form\n          (ngSubmit)=\"register()\"\n          #form='ngForm'>\n    <div class=\"form-group\">\n      <input\n              type=\"text\"\n              name=\"username\"\n              class=\"form-control\"\n              placeholder=\"username\"\n              [(ngModel)]=\"newUsername\"\n              required\n              #username=\"ngModel\">\n      <span\n              class=\"help-block\"\n              *ngIf=\"!username.valid && username.touched\">\n        Please enter a valid username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input\n              type=\"password\"\n              name=\"password\"\n              class=\"form-control\"\n              placeholder=\"password\"\n              [(ngModel)]=\"newPassword\"\n              required\n              #password=\"ngModel\">\n      <span\n              class=\"help-block\"\n              *ngIf=\"!password.valid && password.touched\">\n        Please enter a valid password\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input\n              type=\"password\"\n              name=\"verifiedPassword\"\n              class=\"form-control\"\n              placeholder=\"verify password\"\n              [(ngModel)]=\"regVerifiedPassword\"\n              required\n              #verifiedPassword=\"ngModel\">\n      <span\n              class=\"help-block\"\n              *ngIf=\"(newPassword !== regVerifiedPassword || !verifiedPassword.valid) && verifiedPassword.touched\">\n        Password mis-matching !\n      </span>\n    </div>\n    <label id=\"example-radio-group-label\">Register as</label>\n    <mat-radio-group\n            aria-labelledby=\"example-radio-group-label\"\n            class=\"example-radio-group\"\n            [(ngModel)]=\"registerRole\"[ngModelOptions]=\"{standalone: true}\">\n      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let role of roles\" [value]=\"role\">\n        {{role}}\n      </mat-radio-button>\n    </mat-radio-group>\n    <div class=\"form-group\">\n      <button\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!form.valid || newPassword !== regVerifiedPassword\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-danger btn-block cl-text-white\" (click)=\"onCancel()\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/website/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/website/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    //roleErrorFlag: boolean
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { _id: '', username: '', password: '', userType: '' };
        this.roles = ['Customer', 'Employee', 'Delivery'];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userErrorFlag = false;
        this.userErrorMsg = 'The username already exists! Please use a different name.';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user.username = this.newUsername;
        this.user.password = this.newPassword;
        console.log(this.registerRole);
        this.userService.register(this.user.username, this.user.password, this.registerRole)
            .subscribe(function (data) {
            console.log('input: ' + data);
            if (data) {
                if (_this.registerRole === 'Customer') {
                    _this.router.navigate(['user/home']);
                }
                else if (_this.registerRole === 'Employee') {
                    _this.router.navigate(['restaurant/home']);
                }
            }
            else {
                _this.userErrorFlag = true;
                console.log(_this.userErrorFlag);
            }
        }, function (error) {
            if (error) {
                console.log(error);
            }
        });
    };
    RegisterComponent.prototype.onCancel = function () {
        this.router.navigate(['/login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "signupForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/website/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/website/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/restaurant/restaurant.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/website/restaurant/restaurant.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS9yZXN0YXVyYW50L3Jlc3RhdXJhbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/website/restaurant/restaurant.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/restaurant/restaurant.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  restaurant works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/website/restaurant/restaurant.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/website/restaurant/restaurant.component.ts ***!
  \***********************************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/components/website/restaurant/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.css */ "./src/app/components/website/restaurant/restaurant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/model/restaurant.client.model.ts":
/*!**************************************************!*\
  !*** ./src/app/model/restaurant.client.model.ts ***!
  \**************************************************/
/*! exports provided: Menu, Restaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurant", function() { return Restaurant; });
var Menu = /** @class */ (function () {
    function Menu(id, name, price, description, url) {
        this._id = id;
        this.description = description;
        this.dish_name = name;
        this.price = price;
        this.url = url;
    }
    return Menu;
}());

var Restaurant = /** @class */ (function () {
    function Restaurant(username, password, name, email, address, phone, type, orders, menus) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.type = type;
        this.orders = orders;
        this.menus = menus;
    }
    return Restaurant;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/menu.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/menu.service.client.ts ***!
  \*************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var MenuService = /** @class */ (function () {
    function MenuService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.options = { withCredentials: false };
    }
    MenuService.prototype.createDish = function (dish) {
        return this._http.post(this.baseUrl + '/api/restaurant/menu/', dish);
    };
    MenuService.prototype.findAllDishesForRestaurant = function () {
        return this._http.get(this.baseUrl + '/api/menu');
    };
    MenuService.prototype.findDishById = function (dishId) {
        return this._http.get(this.baseUrl + '/api/restaurant/menu/' + dishId);
    };
    MenuService.prototype.updateDish = function (dishId, dish) {
        return this._http.put(this.baseUrl + '/api/restaurant/menu/' + dishId, dish);
    };
    MenuService.prototype.deleteDish = function (dishId) {
        return this._http.delete(this.baseUrl + '/api/restaurant/menu/' + dishId);
    };
    MenuService.prototype.reorderDishes = function (startIndex, endIndex, dishes) {
        return this._http.put(this.baseUrl + '/api/restaurant/menu/'
            + '/dish?initial=' + startIndex + '&final=' + endIndex, dishes);
    };
    MenuService.prototype.findImage = function (imageName) {
        var url = this.baseUrl + '/api/image/' + imageName;
        return this._http.get(url);
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/services/order.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/order.service.client.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OrderService = /** @class */ (function () {
    //orderApiUrl = '/api/order/';
    //userApiUrl = '/api/user/';
    function OrderService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    OrderService.prototype.createOrder = function (userId, order) {
        console.log('front order service createOrder() called');
        return this.http.post(this.baseUrl + userId + '/order', order);
    };
    OrderService.prototype.findOrdersByUser = function (userId) {
        console.log('front order service findOrderByUser() called');
        return this.http.get(this.baseUrl + userId + '/order');
    };
    OrderService.prototype.findAllOrders = function () {
        console.log('front order service findOrderByRestaurant() called');
        return this.http.get(this.baseUrl + '/order');
    };
    // finishOrder(restaurantId, orderId) {
    //     console.log('front order service finishOrder() called');
    //     return this.http.post<Order>(this.baseUrl+restaurantId+'/order',this.findOrderById(orderId));
    // }
    OrderService.prototype.findOrderById = function (userId, orderId) {
        console.log('front order service findorderById() called');
        // Only need to call server's url to get the data.
        // '/api/restaurant/:websiteId/order/:orderId'
        return this.http.get(this.baseUrl + userId + '/order/' + orderId);
    };
    OrderService.prototype.updateOrder = function (userId, orderId, order) {
        console.log('front order service updateOrder() called');
        return this.http.put(this.baseUrl + userId + '/order/' + orderId, order);
    };
    OrderService.prototype.deleteOrder = function (userId, orderId) {
        console.log('front order service deleteOrder() called');
        return this.http.delete(this.baseUrl + userId + '/order/' + orderId);
    };
    OrderService.prototype.findOrdersbyStatus = function (status) {
        return this.http.get(this.baseUrl + '/order/status/' + status);
    };
    OrderService.prototype.updateOrderStatus = function (orderId, status, order) {
        return this.http.put(this.baseUrl + '/order/' + orderId, order);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/restaurant.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/restaurant.service.client.ts ***!
  \*******************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");






var RestaurantService = /** @class */ (function () {
    function RestaurantService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.options = { withCredentials: false };
    }
    RestaurantService.prototype.createRestaurant = function (restaurant) {
        return this._http.post(this.baseUrl + '/api/restaurant', restaurant);
    };
    RestaurantService.prototype.findRestaurantById = function (restaurantId) {
        return this._http.get(this.baseUrl + '/api/restaurant/' + restaurantId);
    };
    RestaurantService.prototype.findRestaurantByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/restaurant?username=' + username);
    };
    RestaurantService.prototype.findRestaurantByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/restaurant?username=' + username + '&password=' + password);
    };
    RestaurantService.prototype.updateRestaurant = function (restaurantId, restaurant) {
        return this._http.put(this.baseUrl + '/api/restaurant/' + restaurantId, restaurant);
    };
    RestaurantService.prototype.deleteRestaurant = function (restaurantId) {
        return this._http.delete(this.baseUrl + '/api/restaurant/' + restaurantId);
    };
    RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RestaurantService);
    return RestaurantService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var UserService = /** @class */ (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.options = { withCredentials: false };
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.login = function (username, password, userType) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password,
            userTpye: userType
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options);
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http
            .post(this.baseUrl + '/api/logout', '', this.options);
    };
    UserService.prototype.register = function (username, password, userType) {
        this.options.withCredentials = true;
        var user = { username: username, password: password, userType: userType };
        return this._http
            .post(this.baseUrl + '/api/register', user, this.options);
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this._http
            .post(this.baseUrl + '/api/loggedin', '', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) {
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.userApiUrl = '/api/user/';
    }
    WebsiteService.prototype.constructFindUpdateDeleteUrl = function (userId, websiteId) {
        return this.baseUrl + this.userApiUrl + userId + '/restaurant/' + websiteId;
    };
    WebsiteService.prototype.createWebsite = function (website, userId) {
        console.log('front restaurant service createWebsite() called');
        return this.http.post(this.baseUrl + this.userApiUrl + userId + '/restaurant', website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        console.log('front restaurant service findWebsiteByUser() called');
        return this.http.get(this.baseUrl + this.userApiUrl + userId + '/restaurant');
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        console.log('front restaurant service findwebsiteById() called');
        // Only need to call server's url to get the data.
        return this.http.get(this.constructFindUpdateDeleteUrl(userId, websiteId));
    };
    WebsiteService.prototype.updateWebsite = function (userId, websiteId, website) {
        console.log('front restaurant service updateWebsite() called');
        return this.http.put(this.constructFindUpdateDeleteUrl(userId, websiteId), website);
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        console.log('front restaurant service deleteWebsite() called');
        return this.http.delete(this.constructFindUpdateDeleteUrl(userId, websiteId));
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lulin/Documents/cs5610/FoodDelivery/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map