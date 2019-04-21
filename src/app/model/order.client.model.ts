import{Menu} from './restaurant.client.model';

class Details {
  dishes: Menu[];
  quantity: Number[];
  total: Number;
  constructor(dishes: Menu[], quantity: Number[], total: Number) {
    this.dishes = dishes;
    this.quantity = quantity;
    this.total = total;
  }
}

export class Order {
  _id: String;
  user: String;
  userId: String;
  deliverId: String;
  time: Date;
  status: Number;
  details: Details;//0 for not check out, 1 for not finished by the restaurant, 2 for finished.
  userAddress: String;
  phone: String;

  constructor(user: String, userId: String, time: Date, status: Number, details: Details, userAddress: String, phone: String) {
    this.user = user;
    this.userId = userId;
    this.time = time;
    this.status = status;
    this.details = details;
    this.deliverId = null;
    this.userAddress = userAddress;
    this.phone = phone;
  }
}
