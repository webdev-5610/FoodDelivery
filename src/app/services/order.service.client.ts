import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from 'src/app/model/restaurant.client.model';
import {Order} from "../model/order.client.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    baseUrl = environment.baseUrl;
    //orderApiUrl = '/api/order/';
    userApiUrl = '/api/user/';

    constructor(private http: HttpClient) { }


    createOrder(userId, order) {
        console.log('front order service createOrder() called');
        return this.http.post<Order>(
            this.baseUrl +this.userApiUrl+ userId + '/order',
            order);
    }

    findOrdersByUser(userId): Observable<Order[]> {
        console.log('front order service findOrderByUser() called');
        return this.http.get<Order[]>(this.baseUrl+this.userApiUrl + userId + '/order');
    }

    findAllOrdersByDeliver(deliverId): Observable<Order[]> {
        console.log('front order service findOrderByRDeliver() called');
        return this.http.get<Order[]>(this.baseUrl +'/deliver/'+ deliverId + '/order');
    }


    findOrderById(userId, orderId) {
        console.log('front order service findorderById() called');
        // Only need to call server's url to get the data.
        return this.http.get<Order>(this.baseUrl+this.userApiUrl+ userId + '/order/'+orderId);
    }

    // findOrderById(userId, orderId) {
    //     console.log('front order service findorderById() called');
    //     // Only need to call server's url to get the data.
    //     return this.http.get<Order>(this.baseUrl+ userId + '/order/'+orderId);
    // }

    updateOrder(userId, orderId, order) {
        console.log('front order service updateOrder() called');
        return this.http.put<Order>(this.baseUrl+this.userApiUrl+userId+ '/order/'+orderId, order);
    }

    deleteOrder(userId, orderId) {
        console.log('front order service deleteOrder() called');
        return this.http.delete<Order>(this.baseUrl+this.userApiUrl+ userId+'/order/'+orderId);
    }

    findOrderByStatus(deliverId, status){
        console.log('front end service findOrderByStatus called');
        return this.http.get<Order[]>(this.baseUrl+this.userApiUrl+deliverId+'/order/'+status);
    }
    finishOrder(userId, orderId, orderStatus=1) {
        console.log('front order service finishOrder() called');
        return this.http.put<Order>(this.baseUrl+this.userApiUrl+userId+ '/order/'+orderId+orderStatus,this.findOrderById(userId,orderId));
    }
    postOrder(userId, orderId, orderStatus=2){
        console.log('front end service findOrderByStatus called');
        return this.http.put<Order>(this.baseUrl+this.userApiUrl+userId+ '/order/'+orderId+orderStatus, this.findOrderById(userId,orderId));
    }
    acceptOrder(userId, orderId, orderStatus=3){
        console.log('front end service findOrderByStatus called');
        return this.http.put<Order>(this.baseUrl+this.userApiUrl+userId+ '/order/'+orderId+orderStatus, this.findOrderById(userId,orderId));
    }
    completeOrder(userId, orderId, orderStatus=4){
        console.log('front end service findOrderByStatus called');
        return this.http.put<Order>(this.baseUrl+this.userApiUrl+userId+ '/order/'+orderId+orderStatus, this.findOrderById(userId,orderId));
    }
    cancelOrder(userId,orderId, orderStatus=5){
        console.log('front end service findOrderByStatus called');
        return this.http.put<Order>(this.baseUrl+this.userApiUrl+userId+ '/order/'+orderId+orderStatus, this.findOrderById(userId,orderId));
    }
    orderAccept(deliverId, userId, orderId){
        console.log('');
        return this.http.post<Order>(this.baseUrl +'/deliver/'+ deliverId + '/order',this.findOrderById(userId,orderId));
    }


}
