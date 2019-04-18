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
/* harmony import */ var _components_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/restaurant/order-history/order-history.component */ "./src/app/components/restaurant/order-history/order-history.component.ts");
/* harmony import */ var _components_restaurant_order_current_order_current_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/restaurant/order-current/order-current.component */ "./src/app/components/restaurant/order-current/order-current.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_website_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _components_user_orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_7__["OrderhistoryComponent"],
                _components_user_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _components_user_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
                _components_restaurant_restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantProfileComponent"],
                _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _components_website_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_website_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_13__["RestaurantComponent"],
                _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_17__["RestaurantHomeComponent"],
                _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_18__["MenuEditComponent"],
                _components_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_19__["RestaurantOrderHistoryComponent"],
                _components_restaurant_order_current_order_current_component__WEBPACK_IMPORTED_MODULE_20__["RestaurantOrderCurrentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            // providers: [UserService,],
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
/* harmony import */ var _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/restaurant/menu/menu.component */ "./src/app/components/restaurant/menu/menu.component.ts");
/* harmony import */ var _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/register/register.component */ "./src/app/components/website/register/register.component.ts");
/* harmony import */ var _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/restaurant/restaurant-home/restaurant-home.component */ "./src/app/components/restaurant/restaurant-home/restaurant-home.component.ts");
/* harmony import */ var _components_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/restaurant/order-history/order-history.component */ "./src/app/components/restaurant/order-history/order-history.component.ts");
/* harmony import */ var _components_restaurant_order_current_order_current_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/restaurant/order-current/order-current.component */ "./src/app/components/restaurant/order-current/order-current.component.ts");
/* harmony import */ var _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/restaurant/menu-edit/menu-edit.component */ "./src/app/components/restaurant/menu-edit/menu-edit.component.ts");














// Import all other components here
var APP_ROUTES = [
    { path: '', component: _components_website_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_website_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_website_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    //restaurant
    { path: 'restaurant/home', component: _components_restaurant_restaurant_home_restaurant_home_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantHomeComponent"] },
    { path: 'restaurant/profile', component: _components_restaurant_restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantProfileComponent"] },
    { path: 'restaurant/orderhistory', component: _components_restaurant_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_11__["RestaurantOrderHistoryComponent"] },
    { path: 'restaurant/currentorder', component: _components_restaurant_order_current_order_current_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantOrderCurrentComponent"] },
    { path: 'restaurant/menu', component: _components_restaurant_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"] },
    { path: 'restaurant/menu/:dishid', component: _components_restaurant_menu_edit_menu_edit_component__WEBPACK_IMPORTED_MODULE_13__["MenuEditComponent"] },
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
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


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

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger text-center\">\n  {{errorMsg}}\n</div>\n<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"..\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n        Course Edit\n      </h1>\n    </div>\n    <a (click)=\"updateDish()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\" *ngIf=\"dish\">\n      <label for=\"dish-name\">Name</label>\n      <input [(ngModel)]=\"dish.dish_name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"dish-name\"\n             placeholder=\"name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"dish-price\">Price</label>\n      <span>$</span>\n      <input [(ngModel)]=\"dish.price\"\n             name=\"width\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"dish-price\"\n             placeholder=\"Price\"/>\n    </div>\n    <div class=\"form-group\" *ngIf=\"dish\">\n      <label for=\"dish-description\">Description</label>\n      <textarea [(ngModel)]=\"dish.description\" name=\"description\" id=\"dish-description\" class=\"form-control\" rows=\"3\"\n                placeholder=\"Description\"></textarea>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"dish\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"dish.url\"\n             type=\"text\"\n             name=\"url\"\n             class=\"form-control\"\n             id=\"image-URL\"\n             placeholder=\"{{dish.url}}\"\n             ngModel required\n             #url=\"ngModel\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\"   type=\"file\" class=\"form-control\"  id=\"exampleInputFile\"/>\n        <input  name=\"dishId\" value=\"{{dishId}}\"   style=\"display: none\"/>\n        <input  name=\"restaurant\" value=\"{{restaurantId}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n        <br/>\n      </form>\n    </div>\n  </form>\n\n  <button class=\"btn btn-danger  btn-block\" (click)=\"deleteDish()\">Delete</button>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"restaurant/home\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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
/* harmony import */ var _model_restaurant_client_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/restaurant.client.model */ "./src/app/model/restaurant.client.model.ts");
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");








var MenuEditComponent = /** @class */ (function () {
    function MenuEditComponent(activatedRoute, sharedService, restaurantService, route) {
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.restaurantService = restaurantService;
        this.route = route;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.dishErrorMsg = "Dish name can't be empty!";
        this.priceErrorMsg = "Price can't be empty!";
        this.dish = new _model_restaurant_client_model__WEBPACK_IMPORTED_MODULE_3__["Menu"]('', null, '', '');
    }
    MenuEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishErrorFlag = false;
        this.priceErrorFlag = false;
        this.restaurantId = this.sharedService.user._id;
        if (this.dishId) {
            this.restaurantService.findDishById(this.dishId).subscribe(function (dish) {
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
        if (!this.dishId) {
            this.restaurantService.createDish(this.restaurantId, this.dish).subscribe(function (dish) {
                console.log('create dish !');
                _this.route.navigate(['../'], { relativeTo: _this.activatedRoute });
            }, function (error) { return console.log(error); });
        }
        else {
            this.restaurantService.updateDish(this.dish._id, this.dish).subscribe(function (dish) {
                console.log('update dish !');
                _this.route.navigate(['../'], { relativeTo: _this.activatedRoute });
            }, function (error) { return console.log(error); });
        }
    };
    MenuEditComponent.prototype.deleteDish = function () {
        var _this = this;
        this.restaurantService.deleteDish(this.dishId).subscribe(function () { return _this.route.navigate(['../'], { relativeTo: _this.activatedRoute }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], MenuEditComponent.prototype, "imageForm", void 0);
    MenuEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-edit',
            template: __webpack_require__(/*! ./menu-edit.component.html */ "./src/app/components/restaurant/menu-edit/menu-edit.component.html"),
            styles: [__webpack_require__(/*! ./menu-edit.component.css */ "./src/app/components/restaurant/menu-edit/menu-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"],
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"../\"\n         class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n        Menu\n      </h1>\n    </div>\n    <a routerLink=\"./new\"\n       class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding-more\">\n  <div appSortable (newIndexes) = \"onNewIndexes($event)\">\n    <div *ngFor=\"let dish of dishes\">\n      <div class=\"float-right\">\n        <a class=\"float-right cl-text-blue fa fa-bars\"></a>\n        <a routerLink=\"/restaurant/{{restaurantId}}/menu/{{dish._id}}\"\n           class=\"fa fa-cog cl-text-blue\"></a>\n      </div>\n      <p>{{dish.dish_name}}</p>\n      <p>{{dish.price}}</p>\n      <p>{{dish.description}}</p>\n      <img class=\"img-responsive img-rounded cl-widget-images\" src=\"{{dish.url}}\">\n\n    </div>\n</div>\n</div>\n\n  <nav class=\"navbar fixed-bottom cl-grey-navbar\">\n    <div class=\"container-fluid\">\n      <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n        <i class=\"fas fa-user cl-text-blue\"></i>\n      </a>\n    </div>\n  </nav>\n"

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
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(restaurantService, sharedService, router, route) {
        this.restaurantService = restaurantService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.startIndex = 0;
        this.endIndex = 0;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.restaurant = this.sharedService.user;
        this.restaurantId = this.sharedService.user._id;
        this.restaurantService.findAllDishesForRestaurant(this.restaurantId).subscribe(function (dishes) {
            _this.dishes = dishes;
            console.log(_this.dishes);
        });
    };
    MenuComponent.prototype.onNewIndexes = function (newIndexes) {
        this.startIndex = newIndexes.startIndex;
        this.endIndex = newIndexes.endIndex;
        this.restaurantService.reorderDishes(this.restaurantId, this.startIndex, this.endIndex, this.dishes)
            .subscribe();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/restaurant/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/restaurant/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/order-current/order-current.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/restaurant/order-current/order-current.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9vcmRlci1jdXJyZW50L29yZGVyLWN1cnJlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/restaurant/order-current/order-current.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/restaurant/order-current/order-current.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n    <div class=\"container-fluid\">\n        <div>\n            <a class=\"navbar-brand cl-text-black cl-icon-padding\"\n               routerLink=\"../\">\n                <i class=\"fas fa-angle-left\"></i>\n            </a>\n            <h1 class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\">\n                Menu\n            </h1>\n        </div>\n        <a class=\"navbar-brand cl-text-black float-right cl-icon-padding\"\n           routerLink=\"./new\">\n            <i class=\"fas fa-plus\"></i>\n        </a>\n    </div>\n</nav>\n\n<div class=\"container cl-container-padding-more\">\n    <div id=\"accordion\">\n        <div *ngFor=\"let order of orders\">\n\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"{{order._id}}\">\n                    <h5 class=\"mb-0\">\n                        <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n                                aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                            {{order.time}}  Customer:{{order.user}}\n                        </button>\n                    </h5>\n\n                    <div class=\"float-right\">\n                        <button class=\"btn btn-primary btn-small\" [style.color]=\"buttoncolor\"\n                                (click)=\"sendtoAlldelivery(order)\"\n                                type=\"submit\">Send to Delivery\n                        </button>\n                        <button class=\"btn btn-danger btn-small\" [style.color]=\"buttoncolor\"\n                                (click)=\"cancalOrder(order)\"\n                                type=\"submit\">Cancle Order\n                        </button>\n                    </div>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"{{order._id}}\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                        <table class=\"table\">\n                            <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">Name</th>\n                                <th scope=\"col\">Quantity</th>\n                            </tr>\n                            </thead>\n                            <tbody *ngFor=\"let dish of order.details.dish; index as i\">\n\n                            <tr>\n                                <th scope=\"row\">{{i+1}}</th>\n                                <td>{{dish}}</td>\n                                <td>{{order.details.quantity[i]}}</td>\n                            </tr>\n\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n\n        </div>\n    </div>\n\n\n    <nav class=\"navbar fixed-bottom cl-grey-navbar\">\n        <div class=\"container-fluid\">\n            <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n                <i class=\"fas fa-user cl-text-blue\"></i>\n            </a>\n        </div>\n    </nav>\n\n"

/***/ }),

/***/ "./src/app/components/restaurant/order-current/order-current.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/restaurant/order-current/order-current.component.ts ***!
  \********************************************************************************/
/*! exports provided: RestaurantOrderCurrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantOrderCurrentComponent", function() { return RestaurantOrderCurrentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/restaurant.service.client */ "./src/app/services/restaurant.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");





var RestaurantOrderCurrentComponent = /** @class */ (function () {
    function RestaurantOrderCurrentComponent(restaurantService, orderService, route, router, sharedService) {
        this.restaurantService = restaurantService;
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.buttoncolor = "";
    }
    RestaurantOrderCurrentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeId = this.sharedService.user._id;
        this.orderService.findOrdersbyStatus(1).suscribe(function (orders) {
            _this.orders = orders;
            console.log(_this.orders);
        });
    };
    RestaurantOrderCurrentComponent.prototype.sendtoAlldelivery = function (order) {
        this.orderService.updateOrderStatus(order._id, 2, order);
        // this.buttoncolor = '#808389';
    };
    RestaurantOrderCurrentComponent.prototype.cancalOrder = function (order) { };
    RestaurantOrderCurrentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-current',
            template: __webpack_require__(/*! ./order-current.component.html */ "./src/app/components/restaurant/order-current/order-current.component.html"),
            styles: [__webpack_require__(/*! ./order-current.component.css */ "./src/app/components/restaurant/order-current/order-current.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service_client__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], RestaurantOrderCurrentComponent);
    return RestaurantOrderCurrentComponent;
}());



/***/ }),

/***/ "./src/app/components/restaurant/order-history/order-history.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/restaurant/order-history/order-history.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/restaurant/order-history/order-history.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/restaurant/order-history/order-history.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/restaurant/order-history/order-history.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/restaurant/order-history/order-history.component.ts ***!
  \********************************************************************************/
/*! exports provided: RestaurantOrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantOrderHistoryComponent", function() { return RestaurantOrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestaurantOrderHistoryComponent = /** @class */ (function () {
    function RestaurantOrderHistoryComponent() {
    }
    RestaurantOrderHistoryComponent.prototype.ngOnInit = function () {
    };
    RestaurantOrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/components/restaurant/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.css */ "./src/app/components/restaurant/order-history/order-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestaurantOrderHistoryComponent);
    return RestaurantOrderHistoryComponent;
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

module.exports = "<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger text-center\">\n  {{errorMsg}}\n</div>\n\n<body>\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <h1 class=\"cl-text-white navbar-brand cl-text-bold\">\n        Restaurant Home Page\n      </h1>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"../restaurant/{{restaurant._id}}/currentorders\">Current Orders\n  </button>\n  <br/>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"../restaurant/{{restaurant._id}}/website\">Profile\n  </button>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"../restaurant/{{restaurant._id}}/menu\">Menu\n  </button>\n  <button class=\"btn btn-primary btn-block\"\n          routerLink=\"../restaurant/{{restaurant._id}}/orderhistory\">Order History\n  </button>\n  <button class=\"btn btn-danger  btn-block\"\n          (click)=\"logout()\" routerLinkActive=\"active\">Logout\n  </button>\n  <button class=\"btn btn-danger  btn-block\"\n          (click)=\"deleteUser()\" routerLinkActive=\"active\">Delete\n  </button>\n</div>\n"

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






var RestaurantHomeComponent = /** @class */ (function () {
    function RestaurantHomeComponent(restaurantService, route, router, sharedService) {
        this.restaurantService = restaurantService;
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
        this.restaurantService.logout().subscribe(function (data) {
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], RestaurantHomeComponent);
    return RestaurantHomeComponent;
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

module.exports = "<p>\n  home works!\n</p>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/website/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

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


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/website/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/website/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<p>\n  register works!\n</p>\n"

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


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/website/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/website/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
    function Menu(name, price, description, url) {
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







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
    RestaurantService.prototype.login = function (username, password) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options);
    };
    RestaurantService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http
            .post(this.baseUrl + '/api/logout', '', this.options);
    };
    RestaurantService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var restaurant = { username: username, password: password };
        return this._http
            .post(this.baseUrl + '/api/register', restaurant, this.options);
    };
    RestaurantService.prototype.loggedIn = function () {
        var _this = this;
        return this._http
            .post(this.baseUrl + '/api/loggedin', '', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (restaurant) {
            if (restaurant !== 0) {
                _this.sharedService.user = restaurant;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    RestaurantService.prototype.createDish = function (restaurantId, dish) {
        return this._http.post(this.baseUrl + '/api/restaurant/' + restaurantId + '/menu', dish);
    };
    RestaurantService.prototype.findAllDishesForRestaurant = function (restaurantId) {
        return this._http.get(this.baseUrl + '/api/restaurant/' + restaurantId + '/menu');
    };
    RestaurantService.prototype.findDishById = function (dishId) {
        return this._http.get(this.baseUrl + '/api/menu/' + dishId);
    };
    RestaurantService.prototype.updateDish = function (dishId, dish) {
        return this._http.put(this.baseUrl + '/api/menu/' + dishId, dish);
    };
    RestaurantService.prototype.deleteDish = function (dishId) {
        return this._http.delete(this.baseUrl + '/api/menu/' + dishId);
    };
    RestaurantService.prototype.reorderDishes = function (dishId, startIndex, endIndex, dishes) {
        return this._http.put(this.baseUrl + '/api/menu/' + dishId
            + '/widget?initial=' + startIndex + '&final=' + endIndex, dishes);
    };
    RestaurantService.prototype.findImage = function (imageName) {
        var url = this.baseUrl + '/api/image/' + imageName;
        return this._http.get(url);
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
    baseUrl: 'http://localhost:3200'
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

module.exports = __webpack_require__(/*! /Users/zhilinfang/Documents/GitHub/FoodDelivery/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map