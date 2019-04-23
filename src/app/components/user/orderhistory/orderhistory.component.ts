import { Component, OnInit } from '@angular/core';
import {Order} from '../../../model/order.client.model';
import {OrderService} from '../../../services/order.service.client';
import {SharedService} from '../../../services/shared.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  orders: Order[];
  employeeId: String;
  userId: String;

  constructor(private  orderService: OrderService,
              private sharedService: SharedService,
              private router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      console.log('user id: ' + this.userId);
    });
    this.orderService.findOrdersByUser(this.userId).subscribe(
      (orders: Order[]) => {
        console.log(orders);
        this.orders = orders;
      }
    );
  }

}
