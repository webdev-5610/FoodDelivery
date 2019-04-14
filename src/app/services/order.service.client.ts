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
    //userApiUrl = '/api/user/';

    constructor(private http: HttpClient) { }


    createOrder(userId, order) {
        console.log('front order service createOrder() called');
        return this.http.post<Order>(
            this.baseUrl + userId + '/order',
            order);
    }

    findOrdersByUser(userId): Observable<Order[]> {
        console.log('front order service findOrderByUser() called');
        return this.http.get<Order[]>(this.baseUrl + userId + '/order');
    }

    findAllOrdersByRestaurant(restaurantId): Observable<Order[]> {
        console.log('front order service findOrderByRestaurant() called');
        return this.http.get<Order[]>(this.baseUrl + restaurantId + '/order');
    }
    finishOrder(restaurantId, orderId) {
        console.log('front order service finishOrder() called');
        return this.http.post<Order>(this.baseUrl+restaurantId+'/order',this.findOrderById(orderId));
    }


    findOrderById(userId,orderId) {
        console.log('front order service findorderById() called');
        // Only need to call server's url to get the data.
        // '/api/restaurant/:websiteId/order/:orderId'
        return this.http.get<Order>(this.baseUrl+ userId+'/order/'+orderId);
    }

    updateOrder(userId, orderId, order) {
        console.log('front order service updateOrder() called');
        return this.http.put<Order>(this.baseUrl+userId+ '/order/'+orderId, order);
    }

    deleteOrder(userId, orderId) {
        console.log('front order service deleteOrder() called');
        return this.http.delete<Order>(this.baseUrl+ userId+'/order/'+orderId);
    }

    findOrdersbyStatus(status) {
        return this.http.get(this.baseUrl + '/order/status/' + status);
    }

    updateOrderStatus(orderId, status, order){
        return this.http.put(this.baseUrl + '/order/' + orderId, order);
    }
}
