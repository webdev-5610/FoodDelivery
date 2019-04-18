import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from "./user.service.client";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService) {
    }

    canActivate() {
        return this.userService.loggedIn();
    }

    // make sure to import AuthGuard in app.routing.ts and app.module.ts.
    // in app.module.ts, need to register AuthGuard as Provider.
}
