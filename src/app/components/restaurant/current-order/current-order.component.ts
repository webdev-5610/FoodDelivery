import { Component, OnInit } from '@angular/core';
import {Order} from '../../../model/order.client.model';
import { OrderService } from '../../../services/order.service.client';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {

  employeeId: String;
  orders: Order[];
  buttoncolor = "";

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.findOrdersbyStatus(1);
  }

  sendtoAlldelivery(order: Order){
    this.orderService.updateOrderStatus(order._id, 2, order);
    //this.buttoncolor = '#808389';
  }

}
