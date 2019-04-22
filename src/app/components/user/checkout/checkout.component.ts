import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderService} from '../../../services/order.service.client';
import {Order} from '../../../model/order.client.model';
import {Dish} from '../../../model/order.client.model';

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
  orderId: String;
  numErrorFlag: boolean;
  numErrorMsg = 'Invalid number!';


  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private orderService: OrderService,
              private route: Router) {
  }

  ngOnInit() {
    this.numErrorFlag = false;
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
    });
    this.orderService.findCartorderByUser(this.userId).subscribe(
        (orders: any) => {
          this.order = orders[orders.length - 1];
          this.orderId = this.order._id;
        });
    console.log('find cart order called！！！！！！！！！！');
    console.log(this.order.dishes);
  }



  updateOrder() {
    this.order.total = Number(0);
    for (let i = 0; i < this.order.dishes.length; i++) {
      if (this.order.dishes[i].quantity < 0 || !Number.isInteger(Number(this.order.dishes[i].quantity))) {
        this.numErrorFlag = true;
        return;
      }
      this.order.total = Number(this.order.total) + Number(this.order.dishes[i].quantity) * Number(this.order.dishes[i].price);
    }
    if (this.order.dishes === []) {
      this.orderService.deleteOrder(this.userId, this.orderId);
    } else {

      this.orderService.updateOrder(this.userId, this.orderId, this.order).subscribe(
          () => {
            console.log('update order!');
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
