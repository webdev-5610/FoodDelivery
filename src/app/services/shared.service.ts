import {Injectable} from '@angular/core';
import { User } from '../model/user.client.model';
import { Order } from '../model/order.client.model';

@Injectable()
export class SharedService {
    user: any;
    selectedOrder: Order;
}
