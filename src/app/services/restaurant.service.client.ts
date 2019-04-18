import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Menu, Restaurant} from "../model/restaurant.client.model";
import {Router} from "@angular/router";
import {SharedService} from "./shared.service";
import {map} from 'rxjs/operators';

@Injectable()
export class RestaurantService {


    constructor(private _http: HttpClient, private sharedService: SharedService, private router: Router){}
    baseUrl = environment.baseUrl;
    options = {withCredentials: false};
    
    createRestaurant(restaurant: Restaurant) {
        return this._http.post(this.baseUrl + '/api/restaurant', restaurant);
    }

    findRestaurantById(restaurantId: String) {
        return this._http.get(this.baseUrl + '/api/restaurant/' + restaurantId);
    }

    findRestaurantByUsername(username: String) {
        return this._http.get(this.baseUrl + '/api/restaurant?username=' + username);
    }

    findRestaurantByCredentials(username: String, password: String) {
        return this._http.get<Restaurant>(this.baseUrl + '/api/restaurant?username=' + username + '&password=' + password);
    }

    updateRestaurant(restaurantId: String, restaurant: Restaurant) {
        return this._http.put(this.baseUrl + '/api/restaurant/' + restaurantId, restaurant);
    }

    deleteRestaurant(restaurantId: String) {
        return this._http.delete(this.baseUrl + '/api/restaurant/' + restaurantId);
    }

    // login(username: String, password: String) {
    //     this.options.withCredentials = true; // jga
    //
    //     const body = {
    //         username: username,
    //         password: password
    //     };
    //
    //     return this._http.post(this.baseUrl + '/api/login', body, this.options);
    // }
    //
    // logout() {
    //     this.options.withCredentials = true;
    //     return this._http
    //         .post(this.baseUrl + '/api/logout', '', this.options);
    // }
    //
    // register(username: String, password: String) {
    //     this.options.withCredentials = true;
    //     const restaurant = {username: username, password: password};
    //     return this._http
    //         .post(this.baseUrl + '/api/register', restaurant, this.options);
    // }
    //
    // loggedIn() {
    //     return this._http
    //         .post(this.baseUrl + '/api/loggedin', '', this.options)
    //         .pipe(
    //             map((restaurant) => {
    //                     if (restaurant !== 0) {
    //                         this.sharedService.user = restaurant;
    //                         return true;
    //                     } else {
    //                         this.router.navigate(['/login']);
    //                         return false;
    //                     }
    //                 }
    //             ));
    // }

    createDish(restaurantId, dish) {
        return this._http.post(this.baseUrl + '/api/restaurant/menu', dish);
    }

    findAllDishesForRestaurant() {
        return this._http.get(this.baseUrl + '/api/restaurant/menu');
    }

    findDishById(dishId) {
        return this._http.get(this.baseUrl + '/api/restaurant/menu/' + dishId);
    }

    updateDish(dishId, dish: any) {
        return this._http.put(this.baseUrl + '/api/restaurant/menu/' + dishId, dish);
    }

    deleteDish(dishId) {
        return this._http.delete(this.baseUrl + '/api/restaurant/menu/' + dishId);
    }

    reorderDishes(startIndex: Number, endIndex: Number, dishes: Menu[]) {
        return this._http.put(this.baseUrl + '/api/restaurant/menu/'
            + '/dish?initial=' + startIndex + '&final=' + endIndex, dishes);
    }

    findImage(imageName: String) {
        const url = this.baseUrl + '/api/image/' + imageName;
        return this._http.get(url);
    }
}
