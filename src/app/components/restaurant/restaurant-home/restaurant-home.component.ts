import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../../services/restaurant.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";
import {Restaurant} from "../../../model/restaurant.client.model";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css']
})
export class RestaurantHomeComponent implements OnInit {
  restaurant: Restaurant;
  restaurantId: String;

  constructor(private restaurantService: RestaurantService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
    this.restaurant = new Restaurant('', '', '', '', '', '', '', [], []);
  }

  ngOnInit() {
    this.restaurant = this.sharedService.user;
    this.restaurantId = this.sharedService.user._id;
  }

  deleteUser() {
    this.restaurantService.deleteRestaurant(this.restaurant._id).subscribe(
        (restaurant: Restaurant) => {
          console.log('delete user: ' + this.restaurant._id);
          this.router.navigate(['/login']);
        },
        (error: any) => console.log(error)
    );
  }

  logout() {
    this.userService.logout().subscribe((data: any) => {
      this.sharedService.user = null;
      this.router.navigate(['/login']);
    });
  }
}
