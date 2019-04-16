import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliverService } from 'src/app/services/deliver.service.client';
import { Order } from 'src/app/model/order.client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DeliverHomeComponent implements OnInit {
  userId: string;
  orders: Order[];
  inTransitOrder: Order;

  constructor(private _activatedRoute: ActivatedRoute, private _deliverService: DeliverService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      console.log('user id: ' + this.userId);
    });

    this._deliverService.findAllPendingOrder().subscribe(
      (orders: Order[]) => {
        this.orders = orders == null ? [] : orders;
      },
      (error: any) => {
        console.log(error);
      }
    );


    this._deliverService.findInTransitOrder(this.userId).subscribe(
      (order: Order) => {
        this.inTransitOrder = order;
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
}
