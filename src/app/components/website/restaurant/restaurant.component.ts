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
    user: any ={};
    currentOrder: Order;
    loginErrorFlag: boolean;
    loginErrorMsg = 'You need to login to place order!';

    constructor(private  menuService: MenuService,
                private sharedService: SharedService,
                private orderService: OrderService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.user = this.sharedService.user;
        if(!this.user){
            this.user = new User('guest','','','','','','','');
        }
        //this.user._id = 'guest';
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
            var i = this.currentOrder.dishes.findIndex(x => x.dish === dish.dish_name);
            if(i === -1){
                this.currentOrder.dishes.push({dish: dish.dish_name, price:dish.price, quantity: 1});
            }else{
                var pre = this.currentOrder.dishes[i].quantity;
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

    checkout(){
        if (this.user._id === 'guest') {
            this.loginErrorFlag = true;
            return;
        }
        this.router.navigate(['/user',this.user._id, '/checkout']);
    }

}
