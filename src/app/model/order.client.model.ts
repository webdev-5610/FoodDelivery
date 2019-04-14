class Details {
  dish: String[];
  quantity: Number[];
  total: Number;
  constructor(dish:String[],quantity:Number[],total:Number){
    this.dish = dish;
    this.quantity = quantity;
    this.total = total;
  }
}

export class Order {
  _id: String;
  user: String;
  restaurant: String;
  time: Date;
  status: Number;
  details: Details;//0 for not check out, 1 for not finished by the restaurant, 2 for finished.

  constructor(user: String, restaurant: String, time: Date, status: Number,details: Details) {
    this.user = user;
    this.restaurant = restaurant;
    this.time = time;
    this.status = status;
    this.details = details;
  }
}
