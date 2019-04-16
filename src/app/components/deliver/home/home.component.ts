import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliverService } from 'src/app/services/deliver.service.client';
import { Order } from 'src/app/model/order.client.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DeliverHomeComponent implements OnInit {
  userId: string;
  orders: Order[];
  inTransitOrder: Order;

  constructor(private _activatedRoute: ActivatedRoute, private _deliverService: DeliverService, private _sharedService: SharedService, private router: Router) { }

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

  detail(order: Order) {
    this._sharedService.selectedOrder = order;
    this.router.navigate(['/deliver/' + this.userId + '/detail/' + this._sharedService.selectedOrder._id]);
  }

  inTransitDetail() {
    this._sharedService.selectedOrder = this.inTransitOrder;
    this.router.navigate(['/deliver/' + this.userId + '/detail/' + this.inTransitOrder._id]);
  }
}
