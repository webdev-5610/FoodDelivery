import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../services/menu.service.client';
import {SharedService} from '../../../services/shared.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Menu} from '../../../model/restaurant.client.model';
import {OrderService} from '../../../services/order.service.client';
import {Order} from '../../../model/order.client.model';
import {User} from '../../../model/user.client.model';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
    // userId: String;
    dishes: Menu[];
    user: any = {};
    currentOrder: Order;
    loginErrorFlag: boolean;
    loginErrorFlag2: boolean;
    userId: String;
    loginErrorMsg = 'You need to login to place order!';
    loginErrorMsg2 = 'You need to login before going to user profile or order history!';
    constructor(private  menuService: MenuService,
                private sharedService: SharedService,
                private orderService: OrderService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.user = this.sharedService.user;
        if (!this.user) {
            this.user = new User('guest', '', '', '', '', '', '', '');
        }
        // this.user._id = 'guest';
        this.menuService.findAllDishesForRestaurant().subscribe(
            (dishes: any) => {
                this.dishes = dishes;
                console.log(this.dishes);
            }
        );
        this.currentOrder = null;

        console.log(this.user);
    }

    addToShoppingCart(dish: Menu) {
        if (this.user._id === 'guest') {
            this.loginErrorFlag = true;
            return;
        }
        if (this.currentOrder === null) {
            this.currentOrder = new Order(this.user.username, this.user._id, 0, [], 0, '', '');
            this.currentOrder.dishes.push({dish: dish.dish_name, price: dish.price, quantity: 1});

            console.log(this.currentOrder);
            this.orderService.createOrder(this.user._id, this.currentOrder)
                .subscribe(
                    (order: Order) => {
                 this.currentOrder = order;
                    }
                );

            console.log(this.currentOrder);
        } else {
            const i = this.currentOrder.dishes.findIndex(x => x.dish === dish.dish_name);
            if (i === -1) {
                this.currentOrder.dishes.push({dish: dish.dish_name, price: dish.price, quantity: 1});
            } else {
                const pre = this.currentOrder.dishes[i].quantity;
                this.currentOrder.dishes[i].quantity = +pre + 1;
            }

            console.log(this.currentOrder);

            this.orderService.updateOrder(this.user._id, this.currentOrder._id, this.currentOrder)
                .subscribe(
                    (order: Order) => {
                        console.log(order);
                        this.currentOrder = order;
                    }
                );
        }
    }

    checkout() {
        if (this.user._id === 'guest') {
            this.loginErrorFlag = true;
            return;
        }
        this.router.navigate(['/user', this.user._id, 'checkout']);
    }

    menu() {
        if (this.user._id === 'guest') {
            this.loginErrorFlag2 = true;
            return;
        }
        this.router.navigate(['/user', this.user._id, 'menu']);
    }
    orderhistory() {
        if (this.user._id === 'guest') {
            this.loginErrorFlag2 = true;
            return;
        }
        this.router.navigate(['/user', this.user._id, 'orderhistory']);
    }

    profile() {
        if (this.user._id === 'guest') {
            this.loginErrorFlag2 = true;
            return;
        }
        this.router.navigate(['/user', this.user._id, 'profile']);
    }
}
