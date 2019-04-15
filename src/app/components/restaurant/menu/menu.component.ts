import { Component, OnInit } from '@angular/core';
import {Menu, Restaurant} from "../../../model/restaurant.client.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../../../services/restaurant.service.client";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  restaurantId: String;
  dishes: Menu[];
  startIndex: Number;
  endIndex: Number;
  constructor(private  restaurantService: RestaurantService,
              private sharedService: SharedService,
              private router: Router,
              private route: ActivatedRoute) {
    this.startIndex = 0;
    this.endIndex = 0;
  }

  ngOnInit() {
    //this.restaurant = this.sharedService.user;
    this.restaurantId = this.sharedService.user._id;
    this.restaurantService.findAllDishesForRestaurant(this.restaurantId).subscribe(
        (dishes: any) => {
          this.dishes = dishes;
          console.log(this.dishes);
        }
    );
  }

  onNewIndexes(newIndexes) {
    this.startIndex = newIndexes.startIndex;
    this.endIndex = newIndexes.endIndex;
    this.restaurantService.reorderDishes(this.restaurantId, this.startIndex, this.endIndex, this.dishes)
        .subscribe();
  }

  // refresh() {
  //   this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  //
  // }

}
