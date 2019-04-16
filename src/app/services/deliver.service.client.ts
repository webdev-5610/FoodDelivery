import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Order } from '../model/order.client.model';
import { Observable, ObjectUnsubscribedError } from 'rxjs';

@Injectable()
export class DeliverService {

    constructor(private http: HttpClient) {}

    api = {
        'acceptOrder' : this.acceptOrder,
        'completeOrder' : this.completeOrder,
        'cancelOrder' : this.cancelOrder,
        'findInTransitOrder' : this.findInTransitOrder,
        'findAllPendingOrder' : this.findAllPendingOrder
    };

    acceptOrder(deliverId: string, orderId: string, status: string) {
        // return this.http.put( environment.baseUrl + '/api/deliver/' + deliverId + '/order/' + orderId + '/accept', {});
        return new Observable((observer) => {
            observer.next({content: true});
            return {unsubscribe() {}};
        });
    }

    completeOrder(deliverId: string, orderId: string, status: string) {
        // return this.http.put( environment.baseUrl + '/api/deliver/' + deliverId + '/order/' + orderId + '/complete', {});
        return new Observable((observer) => {
            observer.next({content: true});
            return {unsubscribe() {}};
        });
    }

    cancelOrder(deliverId: string, orderId: string, status: string) {
        // return this.http.put( environment.baseUrl + '/api/deliver/' + deliverId + '/order/' + orderId + '/cancel', {});
        return new Observable((observer) => {
            observer.next({content: true});
            return {unsubscribe() {}};
        });
    }

    findInTransitOrder(deliverId: string) {
        // return this.http.get(environment.baseUrl + '/api/deliver/' + deliverId + '/currentOrder');
        return new Observable((observer) => {
            observer.next({
                _id: '1234',
                user: 'Shiqi',
                userAddress: '14725 NE 20th St, Bellevue, WA 98007',
                restaurant: 'little garden',
                time: '4/16/2019 3:40:26 AM',
                status: 3,
                details: {
                    dish: ['abc', 'nba', 'blabla'],
                    quantity: [2, 1, 3],
                    total: 89.64
                }
            });
            return {unsubscribe() {}};
        });
    }

    findAllPendingOrder() {
        // return this.http.get(environment.baseUrl + '/api/deliver/pending');
        return new Observable((observer) => {
            observer.next([
                {
                    _id: '1564',
                    user: 'Shiqi1',
                    userAddress: '14725 NE 20th St, Bellevue, WA 98007',
                    restaurant: 'little garden',
                    time: '4/16/2019 3:40:26 AM',
                    status: 2,
                    details: {
                        dish: ['abc', 'nba', 'blabla'],
                        quantity: [2, 1, 3],
                        total: 109.64
                    }
                },
                {
                    _id: '4567',
                    user: 'Shiqi2',
                    userAddress: '15920 NE 8th St #3, Bellevue, WA 98008',
                    restaurant: 'Dough Zone',
                    time: '4/16/2019 13:40:26 PM',
                    status: 2,
                    details: {
                        dish: ['abc', 'nba', 'blabla'],
                        quantity: [2, 1, 3],
                        total: 69.65
                    }
                },
                {
                    _id: '7986',
                    user: 'Shiqi3',
                    userAddress: '2347, 1915 140th Ave NE, Bellevue, WA 98005',
                    restaurant: 'Frying Fish',
                    time: '4/16/2019 3:40:26 AM',
                    status: 2,
                    details: {
                        dish: ['abc', 'nba', 'blabla'],
                        quantity: [2, 1, 3],
                        total: 89.64
                    }
                },
            ]);
            return {unsubscribe() {}};
        });
    }
}