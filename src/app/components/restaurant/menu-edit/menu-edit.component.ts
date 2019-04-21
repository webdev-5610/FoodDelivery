import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Menu} from "../../../model/restaurant.client.model";
import {NgForm} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {SharedService} from "../../../services/shared.service";
import {MenuService} from "../../../services/menu.service.client";

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  @ViewChild('f') imageForm: NgForm;
  dishId: String;
  name: String;
  description: String;
  url: String;
  dish: any = {};
  baseUrl: String = environment.baseUrl;
  errorFlag: boolean;
  errorMsg = "Dish name or Price can't be empty!";

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private menuService: MenuService,
              private route: Router) {
    //this.dish = new Menu('',  '',0,'','');
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params.subscribe(params => {
      this.dishId = params['did'];
    });
    if(this.dishId !== 'new'){
      this.menuService.findDishById(this.dishId).subscribe(
          (dish: Menu) => {
            this.dish = dish;
          }
      )
    }
  }
  updateDish() {
    if (!this.dish.dish_name || !this.dish.price) {
      this.errorFlag = true;
      return;
    }
    // if (!this.dish.price) {
    //   this.priceErrorFlag = true;
    //   return;
    // }

    if (this.dishId === 'new') {
      this.menuService.createDish(this.dish).subscribe(
          (dish: Menu) => {
            console.log('create dish !');
            this.route.navigate(['../'], {relativeTo: this.activatedRoute});
          },
          (error: any) => console.log(error)
      );
    } else {
      this.menuService.updateDish(this.dish._id, this.dish).subscribe(
          (dish: Menu) => {
            console.log('update dish !');
            this.route.navigate(['../'], {relativeTo: this.activatedRoute});
          },
          (error: any) => console.log(error)
      );
    }
  }

  deleteDish() {
    this.menuService.deleteDish(this.dishId).subscribe(
        () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }

}
