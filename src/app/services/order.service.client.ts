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

    constructFindUpdateDeleteUrl(userId, orderId) {
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

    function findAllOrdersByRestaurant(restaurantId) {
        console.log('Mongoose: findAllOrdersByrestaurant called');
        return orderModel.find({_restaurant: restaurantId})
            .populate('_restaurant', '_id');      // Do not append all the user info here. Just populate user with its id.

    }
    function finishOrder(req, res) {
        var order = req.body;
        var restaurantId = req.params['restaurantId'];
        order.restaurant = restaurantId;
        orderModel.finishOrder(restaurantId, order)
            .then(function (order) {
                    res.status(200).send(order);
                    return order;  // must return order here, in order to prevent further asynchronous calls.
                },
                function (err) {
                    console.log('finish order error! ' + err);
                    res.sendStatus(400);
                    return err;

                });

    }

    function findAllOrdersByRestaurant(req, res) {
        var restaurantId = req.params['restaurantId'];
        orderModel.findAllOrdersByRestaurant(restaurantId)
            .then(function (orders) {
                return res.status(200).json(orders);
            })

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
