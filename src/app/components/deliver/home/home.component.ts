import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliverService } from 'src/app/services/deliver.service.client';
import { Order } from 'src/app/model/order.client.model';
import { SharedService } from 'src/app/services/shared.service';
import { OrderService } from '../../../services/order.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DeliverHomeComponent implements OnInit {
  userId: string;
  orders: Order[];
  orderHistory: Order[];
  inTransitOrder: Order;
  hasInTransitOrder = false;

  constructor(private _activatedRoute: ActivatedRoute,
    private _deliverService: DeliverService,
    private _sharedService: SharedService,
    private _orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      console.log('user id: ' + this.userId);
    });

    this._orderService.findAllPendingOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders == null ? [] : orders;
        console.log(this.orders);
      },
      (error: any) => {
        console.log(error);
      }
    );

    this._orderService.findIntransitOrderByDeliver(this.userId).subscribe(
      (order: Order[]) => {
        if (order[0]) {
          this.hasInTransitOrder = true;
        } else {
          this.hasInTransitOrder = false;
        }
        this.inTransitOrder = order[0];
        console.log(this.inTransitOrder);
      },
      (error: any) => {
        console.log(error);
      }
    );

    this._orderService.findAllOrdersByDeliver(this.userId).subscribe(
      (orders: Order[]) => {
        this.orderHistory = orders == null ? [] : orders;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  detail(order: Order) {
    this._sharedService.selectedOrder = order;
    this.router.navigate(['/deliver/' + this.userId + '/detail/' + this._sharedService.selectedOrder._id]);
  }

  inTransitDetail() {
    this._sharedService.selectedOrder = this.inTransitOrder;
    this.router.navigate(['/deliver/' + this.userId + '/detail/' + this.inTransitOrder._id]);
  }
}
