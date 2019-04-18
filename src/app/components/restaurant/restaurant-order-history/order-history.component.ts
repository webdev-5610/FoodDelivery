import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order.client.model";
import {RestaurantService} from "../../../services/restaurant.service.client";
import {SharedService} from "../../../services/shared.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../../model/restaurant.client.model";
import {OrderService} from "../../../services/order.service.client";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class RestaurantOrderHistoryComponent implements OnInit {
  orders: Order[];
  employeeId: String;

  constructor(private  orderService: OrderService,
              private sharedService: SharedService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId = this.sharedService.user._id;
    // this.orderService.findAllOrders().subscribe(
    //     (orders: any) => {
    //       this.orders = orders;
    //     }
    // )

  }

}
