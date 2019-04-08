# FoodDelivery



 Customer: url/user/uid
 
    profile: url/user/uid/profile
    order_history: url/user/uid/orderhistory
    order_edit: url/restaurant=rid/user=uid/order
    checkout: url/restaurant=rid/user=uid/checkout
    order_success: url/user/uid/orderId
 Restaurant:url/restaurant/rid
 
    profile: url/restaurant/rid/profile
    menu: url/restaurant/rid/menu
    menu_edit : url/restaurant/rid/menu-edit
    statistics: url/restaurant/rid/statistics
 Admin: url/admin
 
    admin-list
    admin-edit
 All user can access:
 
    home(login,search)
    login: url/login
    register: url/register
    searchbyaddress: url/restaurant/search=location
    searchbytype: url/restaurant/search=location/type
    Restaurant: url/restaurant/rid
    review: url/restaurant/rid/review
    
    
 Backend data design:
  
    user:  _id, name, password, email, address, phone, credit_card_info, billing_info, order_history
    restaurant: name, password, email , address, phone, type , orders, menu(dish name, price,discription)
    order:  user, restaurant, time, status，details(dish, quantity, total) 
    
 Backend model design:给menu增加了id，因为按照原本的结构一个menu只有一个dish，所以把restaurant的menu改成了menu[]，details因为是一对一的，没有做改动。
  
    user:  _id, name, password, email, address, phone, credit_card_info, billing_info, order_history, all string type
             constructor(username: String, password: String, email: String, address: String, phone: String,              credit_card_info: String,billing_info: String)
             


             
    restaurant: _id, name, password, email , address, phone, type , orders, menus(_id, dish_name, price,discription)
      class Menu {
      _id: String;
      dish_name: String;
      price: Number;
      description: String;

      constructor(name: String, price: Number, description: String) {
          this.description = description;
          this.dish_name = name;
          this.price = price;
      }
      }
      export class Restaurant {
      _id: String;
      name: String;
      password: String;
      email: String;
      address: String;
      phone: String;
      type: String;
      oders: Order[];
      menus: Menu[];
    constructor(name: String, password: String, email: String, address: String, phone: String, type: String, orders: Order[], menus: Menu[]) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.type = type;
        this.oders = orders;
        this.menus = menus;
    }}

    order:  user, restaurant, time, status，details(dish, quantity, total) 
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
      status: String;
      details: Details;
      constructor(user: String, restaurant: String, time: Date, status: String,details: Details) {
        this.user = user;
        this.restaurant = restaurant;
        this.time = time;
        this.status = status;
        this.details = details;
      }
    }
