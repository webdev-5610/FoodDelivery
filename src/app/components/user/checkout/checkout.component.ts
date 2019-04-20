import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderService} from '../../../services/order.service.client';
import {Order} from '../../../model/order.client.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  @ViewChild('f') imageForm: NgForm;
  userId: String;
  order: Order;
  name: String;
  description: String;
  dish: any = {};
  orderId: String;
  dishErrorFlag: boolean;
  priceErrorFlag:boolean;
  dishErrorMsg = "Dish name can't be empty!";
  priceErrorMsg = "Price can't be empty!";

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private orderService: OrderService,
              private route: Router) {
  }

  ngOnInit() {
    this.dishErrorFlag = false;
    this.priceErrorFlag = false;
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.orderService.findCartorderByUser(this.userId).subscribe(
        (order: any) => {
          this.order = order;
          this.orderId = order._id;
        });

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
      this.orderService.createDish(this.dish).subscribe(
          (dish: Menu) => {
            console.log('create dish !');
            this.route.navigate(['../'], {relativeTo: this.activatedRoute});
          },
          (error: any) => console.log(error)
      );
    } else {
      this.orderService.updateDish(this.dish._id, this.dish).subscribe(
          (dish: Menu) => {
            console.log('update dish !');
            this.route.navigate(['../'], {relativeTo: this.activatedRoute});
          },
          (error: any) => console.log(error)
      );
    }
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.userId, this.orderId).subscribe(
        () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }
}
