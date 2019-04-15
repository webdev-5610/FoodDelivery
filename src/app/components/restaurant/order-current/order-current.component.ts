import { Component, OnInit } from '@angular/core';
import {Order} from "../../../model/order.client.model";
import {RestaurantService} from "../../../services/restaurant.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-order-current',
  templateUrl: './order-current.component.html',
  styleUrls: ['./order-current.component.css']
})
export class RestaurantOrderCurrentComponent implements OnInit {
  employeeId: String;
  orders: Order[];
  //buttoncolor = ""

  constructor(private restaurantService: RestaurantService,
              private orderService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.employeeId = this.sharedService.user._id;
    // this.orderService.findOrdersbyStatus(1).suscribe(
    //     (orders: any) => {
    //       this.orders = orders;
    //       console.log(this.orders);
    //     }
    // )
  }

  sendtoAlldelivery(order: Order){
    //this.orderService.updateOrderStatus(order._id, 2, order);
    // this.buttoncolor = '#808389';
  }

  cancalOrder(order: Order){}

}
