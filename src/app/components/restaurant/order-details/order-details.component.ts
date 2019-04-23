import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user.client.model';
import {Order} from '../../../model/order.client.model';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderService} from '../../../services/order.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId: String;
  order: Order;
  status: any = 'unknown';
  delivername: String;
  dishes: any[];

  constructor(private _activatedRoute: ActivatedRoute, private _sharedService: SharedService,
              private userSevice: UserService, private orderService: OrderService) { }

  ngOnInit() {
    // this.order.dishes = [];
    this._activatedRoute.params.subscribe(params => {
      this.orderId = params['oid'];
      console.log('order id: ' + this.orderId);
    });

    this.orderService.findOrderById(this.orderId).subscribe(
        (order1: any) => {
          this.order = order1;
          this.dishes = order1.dishes;
          console.log(this.order);
          if (this.order.deliverId) {
              this.userSevice.findUserById(this.order.deliverId).subscribe(
                  (user: User) => {
                      this.delivername = user.username;
                      console.log(this.delivername);
                  }
              );
          } else {
              this.delivername = 'N/A';
          }

          if (this.order.status === 3) {
            this.status = 'In transit';
          } else if (this.order.status === 2) {
            this.status = 'Waiting for Delivery';
          } else if (this.order.status === 0) {
            this.status =  'Incomplete';
          } else if (this.order.status === 1) {
            this.status = 'Preparing';
          } else if (this.order.status === 4) {
            this.status = 'Completed';
          } else if (this.order.status === 5) {
            this.status = 'Cancelled';
          }
        }
    );

  }

}
