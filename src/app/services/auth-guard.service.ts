import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {RestaurantService} from "./restaurant.service.client";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private restaurantService: RestaurantService,
                private router: Router) {
    }

    canActivate() {
        return this.restaurantService.loggedIn();
    }

    // make sure to import AuthGuard in app.routing.ts and app.module.ts.
    // in app.module.ts, need to register AuthGuard as Provider.
}
