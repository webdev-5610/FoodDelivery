import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderService} from '../../../services/order.service.client';
import {Order} from '../../../model/order.client.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class UsermenuComponent implements OnInit {


  @ViewChild('f') imageForm: NgForm;
  userId: String;
  name: String;
  description: String;
  url: String;
  dish: any = {};
  baseUrl: String = environment.baseUrl;
  dishErrorFlag: boolean;
  priceErrorFlag:boolean;
  dishErrorMsg = "Dish name can't be empty!";
  priceErrorMsg = "Price can't be empty!";

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private orderService: OrderService,
              private route: Router) {
    //const time = new Date();
    //this.dish = new Order('',  time, 0, '', '');
  }

  ngOnInit() {
    this.dishErrorFlag = false;
    this.priceErrorFlag = false;
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.orderService.findOrdersByUser()ById(this.dishId).subscribe(
        (dish: Order.) => {
          this.dish = dish;
        });
  }



  onNewIndexes(newIndexes) {
    this.startIndex = newIndexes.startIndex;
    this.endIndex = newIndexes.endIndex;
    this.orderService.reorderDishes(this.startIndex, this.endIndex, this.dishes)
        .subscribe();
  }

  updateOrder() {
    if (!this.dish.dish_name) {
      this.dishErrorFlag = true;
      return;
    }
    if (!this.dish.price) {
      this.priceErrorFlag = true;
      return;
    }

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
