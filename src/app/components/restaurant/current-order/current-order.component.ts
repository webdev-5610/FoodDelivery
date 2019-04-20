import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order.client.model";
import {RestaurantService} from "../../../services/restaurant.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";
import {OrderService} from "../../../services/order.service.client";

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {

  employeeId: String;
  orders: Order[];

  constructor(private restaurantService: RestaurantService,
              private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.employeeId = this.sharedService.user._id;
    this.orderService.findOrderByStatus(null,1).subscribe(
        (orders: any) => {
          this.orders = orders;
          console.log(this.orders);
        }
    )
  }

  sendtoAlldelivery(order: Order){
    this.orderService.postOrder(order.user, order._id);
    //this.buttoncolor = '#808389';
  }

  cancalOrder(order: Order){
    this.orderService.cancelOrder(order.user, order._id);
  }


}
