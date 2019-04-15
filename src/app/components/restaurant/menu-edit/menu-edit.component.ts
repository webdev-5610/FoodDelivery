import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Menu, Restaurant} from "../../../model/restaurant.client.model";
import {RestaurantService} from "../../../services/restaurant.service.client";
import {NgForm} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  @ViewChild('f') imageForm: NgForm;
  restaurantId: String;
  dishId: String;
  name: String;
  description: String;
  url: String;
  dish: Menu;
  baseUrl: String = environment.baseUrl;
  dishErrorFlag: boolean;
  priceErrorFlag:boolean;
  dishErrorMsg = "Dish name can't be empty!";
  priceErrorMsg = "Price can't be empty!";

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private restaurantService: RestaurantService,
              private route: Router) {
    this.dish = new Menu('', null,'','');
  }

  ngOnInit() {
    this.dishErrorFlag = false;
    this.priceErrorFlag = false;
    this.restaurantId = this.sharedService.user._id;

    if(this.dishId){
      this.restaurantService.findDishById(this.dishId).subscribe(
          (dish: Menu) => {
            this.dish = dish;
          }
      )
    }
  }
  updateDish() {
    if (!this.dish.dish_name) {
      this.dishErrorFlag = true;
      return;
    }
    if (!this.dish.price) {
      this.priceErrorFlag = true;
      return;
    }

    if (!this.dishId) {
      this.restaurantService.createDish(this.restaurantId, this.dish).subscribe(
          (dish: Menu) => {
            console.log('create dish !');
            this.route.navigate(['../'], {relativeTo: this.activatedRoute});
          },
          (error: any) => console.log(error)
      );
    } else {
      this.restaurantService.updateDish(this.dish._id, this.dish).subscribe(
          (dish: Menu) => {
            console.log('update dish !');
            this.route.navigate(['../'], {relativeTo: this.activatedRoute});
          },
          (error: any) => console.log(error)
      );
    }
  }

  deleteDish() {
    this.restaurantService.deleteDish(this.dishId).subscribe(
        () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }

}
