import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from 'src/app/model/restaurant.client.model';
import {Order} from '../model/order.client.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    baseUrl = environment.baseUrl;
    //orderApiUrl = '/api/order/';
    userApiUrl = '/api/user/';

    constructor(private http: HttpClient) { }
    findAllCurrentOrders() {
        console.log('front call all current orders');
        return this.http.get(this.baseUrl + '/api/allcurrentorders');
    }

    createOrder(userId, order) {
        console.log('front order service createOrder() called');
        return this.http.post(this.baseUrl + this.userApiUrl + userId + '/order', order);
    }

    findOrdersByUser(userId): Observable<Order[]> {
        console.log('front order service findOrderByUser() called');
        return this.http.get<Order[]>(this.baseUrl + this.userApiUrl + userId + '/orders');
    }

    findAllOrdersByDeliver(deliverId): Observable<Order[]> {
        console.log('front order service findOrderByRDeliver() called');
        return this.http.get<Order[]>(this.baseUrl + '/api/deliver/' + deliverId + '/orders');
    }

    findCartorderByUser(userId) {
        return this.http.get<Order[]>(this.baseUrl + '/api/user/' + userId + '/cartorders');
    }

    findIntransitOrderByUser(userId) {
        return this.http.get<Order[]>(this.baseUrl + '/api/user/' + userId + '/intransitorder');
    }

    findIntransitOrderByDeliver(deliverId) {
        return this.http.get<Order[]>(this.baseUrl + '/api/deliver/' + deliverId + '/intransitorder');
    }

    findOrderById(userId, orderId) {
        console.log('front order service findorderById() called');
        // Only need to call server's url to get the data.
        return this.http.get<Order>(this.baseUrl + '/api/order/' + orderId);
    }

    updateOrder(userId, orderId, order) {
        console.log('front order service updateOrder() called');
        return this.http.put(this.baseUrl + this.userApiUrl + userId + '/order/' + orderId, order);
    }

    deleteOrder(userId, orderId) {
        console.log('front order service deleteOrder() called');
        return this.http.delete<Order>(this.baseUrl + this.userApiUrl + userId + '/order/' + orderId);
    }

    // maybe use findAllPendingOrders instead of this one
    findOrderByStatus(deliverId, status) {
        console.log('front end service findOrderByStatus called');
        return this.http.get<Order[]>(this.baseUrl+this.userApiUrl+deliverId+'/order/'+status);
    }

    findAllPendingOrders() {
        console.log('front end service findAllPendingOrders called');
        return this.http.get<Order[]>(this.baseUrl + '/api/allpendingorders');
    }

    checkoutOrder(userId, orderId) {
        console.log('front end service findOrderByStatus called');
        return this.http.post<Order>(this.baseUrl + '/api/user/' + userId + '/order/' + orderId + '/checkout', {});
    }
    postOrder(userId, orderId) {
        console.log('front end service findOrderByStatus called');
        return this.http.post<Order>(this.baseUrl + '/api/user/' + userId + '/order/' + orderId + '/post', {});
    }
    acceptOrder(userId, orderId) {
        console.log('front end service findOrderByStatus called');
        return this.http.post<Order>(this.baseUrl + '/api/deliver/' + userId + '/order/' + orderId + '/accept', {});
    }
    completeOrder(userId, orderId) {
        console.log('front end service findOrderByStatus called');
        return this.http.post<Order>(this.baseUrl + '/api/deliver/' + userId + '/order/' + orderId + '/complete', {});
    }
    cancelOrder(userId, orderId)  {
        console.log('front end service findOrderByStatus called');
        return this.http.post<Order>(this.baseUrl + '/api/user/' + userId + '/order/' + orderId + '/cancel', {});
    }
}
