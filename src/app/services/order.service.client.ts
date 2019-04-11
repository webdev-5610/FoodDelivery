import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from 'src/app/model/restaurant.client.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    baseUrl = environment.baseUrl;
    orderApiUrl = '/api/order/';
    websiteApiUrl = '/api/restaurant/';

    constructor(private http: HttpClient) { }
    constructFindUpdateDeleteUrl(websiteId, orderId) {
        return this.baseUrl + this.websiteApiUrl + websiteId + '/order/' + orderId;
    }

    createOrder(order, websiteId) {
        console.log('front order service createOrder() called');
        return this.http.post<Restaurant>(
            this.baseUrl + this.websiteApiUrl + websiteId + '/order',
            order);
    }

    findOrderByWebsiteId(websiteId): Observable<Restaurant[]> {
        console.log('front order service findOrderByWebsite() called');
        return this.http.get<Restaurant[]>(this.baseUrl + this.websiteApiUrl + websiteId + '/order');

    }



    findOrderById(websiteId, orderId) {
        console.log('front order service findorderById() called');
        // Only need to call server's url to get the data.
        // '/api/restaurant/:websiteId/order/:orderId'
        return this.http.get<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, orderId));
    }

    updateOrder(websiteId, orderId, order) {
        console.log('front order service updateOrder() called');
        return this.http.put<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, orderId), order);
    }

    deleteOrder(websiteId, orderId) {
        console.log('front order service deleteOrder() called');
        return this.http.delete<Restaurant>(this.constructFindUpdateDeleteUrl(websiteId, orderId));
    }
}
