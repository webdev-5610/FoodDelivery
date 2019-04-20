import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user.client.model';
import {Order} from '../../../model/order.client.model';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

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
  status: string;



  constructor(private _activatedRoute: ActivatedRoute, private _sharedService: SharedService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.orderId = params['oid'];
      console.log('user id: ' + this.userId);

      this.user = this._sharedService.user;
      this.order = this._sharedService.selectedOrder;
      if (this.order.status === 3) {
        this.status = 'in transit';
      } else if (this.order.status === 2) {
        this.status = 'active';
      } else if (this.order.status === 0){
        this.status =  'incomplete';
      } else if (this.order.status === 1) {
        this.status = 'preparing';
      } else if (this.order.status === 4) {
        this.status = 'completed';
      } else if (this.order.status === 5) {
        this.status = 'cancelled';
      }
    });
  }



}
