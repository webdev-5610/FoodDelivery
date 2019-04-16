import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
        return this.http.put( environment.baseUrl + '/api/deliver/' + deliverId + '/order/' + orderId + '/accept', {});
    }

    completeOrder(deliverId: string, orderId: string, status: string) {
        return this.http.put( environment.baseUrl + '/api/deliver/' + deliverId + '/order/' + orderId + '/complete', {});
    }

    cancelOrder(deliverId: string, orderId: string, status: string) {
        return this.http.put( environment.baseUrl + '/api/deliver/' + deliverId + '/order/' + orderId + '/cancel', {});
    }

    findInTransitOrder(deliverId: string) {
        return this.http.get(environment.baseUrl + '/api/deliver/' + deliverId + '/currentOrder');
    }

    findAllPendingOrder() {
        return this.http.get(environment.baseUrl + '/api/deliver/pending');
    }
}