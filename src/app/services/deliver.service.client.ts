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
        'cancelOrder' : this.cancelOrder
    };

    public mapAPIKey = 'AIzaSyBtrCeFbuL6cSgjC2UyJsaJuJoXKXAmQQM';

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

    calculate(lat: String, lng: String, destination: String) {
        return this.http.post(environment.baseUrl + '/api/deliver/getdistance', {
            lat: lat,
            lng: lng,
            destination: destination
        });
    }
}
