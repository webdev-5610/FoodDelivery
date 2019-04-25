import {Component, OnInit, ViewChild} from '@angular/core';
""
import {NgForm} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderService} from '../../../services/order.service.client';
import {Order} from '../../../model/order.client.model';
import {Dish} from '../../../model/order.client.model';
import {User} from '../../../model/user.client.model';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  @ViewChild('f') imageForm: NgForm;
  userId: String;
  user: User;
  order: Order;
  name: String;
  orderId: String;
  numErrorFlag: boolean;
  numErrorMsg = 'Invalid number!';
  dishes: any[];
  phone: String;
  address: String;
  errorFlag: boolean
  errorMsg = "Address or phone can't be null!";
  total: Number;

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private orderService: OrderService,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit() {
    this.address = '';
    this.phone = '';
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId).subscribe(
          (user: User) => {
            this.user = user;
            this.address = user.address;
            this.phone = user.phone;
          }
      );
    });
    console.log(this.user);
    this.orderService.findCartorderByUser(this.userId).subscribe(
        (orders: any) => {
          this.order = orders[orders.length - 1];
          this.orderId = this.order._id;
          this.dishes = orders[orders.length - 1].dishes;

          this.order.total = Number(0);
          for (let i = 0; i < this.order.dishes.length; i++) {
            this.order.total = Number(this.order.total) + Number(this.order.dishes[i].quantity) * Number(this.order.dishes[i].price);
          }
          this.total = this.order.total;
          console.log(orders);
            console.log(orders[orders.length - 1]);
            console.log(this.order);
        });
    console.log('find cart order called！！！！！！！！！！');

  }



  updateOrder() {
    this.order.userAddress = this.address;
    this.order.phone = this.phone;
    this.order.total = Number(0);
    for (let i = 0; i < this.order.dishes.length; i++) {
      if (this.order.dishes[i].quantity === 0) {
        this.order.dishes.splice(i, 1);
      }
      this.order.total = Number(this.order.total) + Number(this.order.dishes[i].quantity) * Number(this.order.dishes[i].price);
    }
    if (this.order.dishes === []) {
      this.orderService.deleteOrder(this.userId, this.orderId);
      this.route.navigate(['/menu']);
    } else {

      this.orderService.updateOrder(this.userId, this.orderId, this.order).subscribe(
          () => {
            console.log('update order!');
          },
          (error: any) => console.log(error)
      );
      // this.orderService.checkoutOrder(this.userId, this.orderId).subscribe(
      //     () => {
      //       console.log('sumbit order!');
      //     },
      // );
      // this.route.navigate(['../orderhistory'], {relativeTo: this.activatedRoute});
    }
  }

  submit() {
    this.order.userAddress = this.address;
    this.order.phone = this.phone;
    this.order.total = this.total;
    console.log(this.address);
    if (this.address === '' || this.phone === '') {
      this.errorFlag = true;
      return;
    }
    this.orderService.updateOrder(this.userId, this.orderId, this.order).subscribe(
        () => {
          console.log('update order!');
        },
        (error: any) => console.log(error)
    );
    this.orderService.checkoutOrder(this.userId, this.orderId).subscribe(
        () => {
          console.log('sumbit order!');
        },
    );
    this.route.navigate(['../orderhistory'], {relativeTo: this.activatedRoute});
  }

  deleteOrder() {
    this.orderService.deleteOrder(this.userId, this.orderId).subscribe(
        () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }
}
