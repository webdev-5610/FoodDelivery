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
  status: Boolean;
  details: Details;

  constructor(user: String, restaurant: String, time: Date, status: Boolean,details: Details) {
    this.user = user;
    this.restaurant = restaurant;
    this.time = time;
    this.status = status;
    this.details = details;
  }
}
