import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliverService } from 'src/app/services/deliver.service.client';
import { User } from 'src/app/model/user.client.model';
import { Order } from 'src/app/model/order.client.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  userId: string;
  orderId: string;
  user: User;
  order: Order;

  constructor(private _activatedRoute: ActivatedRoute, private _deliverService: DeliverService, private _sharedService: SharedService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.orderId = params['oid'];
      console.log('user id: ' + this.userId);

      this.user = this._sharedService.user;
      this.order = this._sharedService.selectedOrder;
    });
  }

  acceptOrder() {
    this._deliverService.acceptOrder(this.userId, this.orderId, '3').subscribe();
  }

  completeOrder() {
    this._deliverService.completeOrder(this.userId, this.orderId, '3').subscribe();
  }

  cancelOrder() {
    this._deliverService.cancelOrder(this.userId, this.orderId, '3').subscribe();
  }

  calculateDistance() {
    // this._deliverService.calculate();
  }

}
