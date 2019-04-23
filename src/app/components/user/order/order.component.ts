import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user.client.model';
import {Order} from '../../../model/order.client.model';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderService} from '../../../services/order.service.client';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userId: string;
  orderId: string;
  user: User;
  order: Order;
  status: any = 'unknown';

  constructor(private _activatedRoute: ActivatedRoute, private _sharedService: SharedService,
              private orderService: OrderService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.orderId = params['oid'];
      console.log('user id: ' + this.userId);
    });

    this.user = this._sharedService.user;
    this.orderService.findOrderById(this.orderId).subscribe(
        (order: any) => {
          this.order = order;
            console.log(this.order);
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
    console.log(this.order);
  }



}
