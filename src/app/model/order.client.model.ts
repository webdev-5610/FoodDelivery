class Dish {
  dish: String;
  price: Number;
  quantity: Number;
  constructor(dish: String, price: Number, quantity: Number) {
    this.dish = dish;
    this.price = price;
    this.quantity = quantity;
  }
}

export class Order {
  _id: String;
  user: String;
  userId: String;
  deliverId: String;
  time: Date;
  status: Number;// 0 for not check out, 1 for not finished by the restaurant, 2 for finished.
  dishes: Dish[];
  total: Number;
  userAddress: String;
  phone: String;

  constructor(user: String, userId: String, status: Number, dishes: Dish[], total: Number, userAddress: String, phone: String) {
    this.user = user;
    this.userId = userId;
    // this.time = time;
    this.status = status;
    this.dishes = dishes;
    this.total = total;
    this.deliverId = null;
    this.userAddress = userAddress;
    this.phone = phone;
  }
}
